import React from 'react'
import ssh2 from 'ssh2'
import { readFileSync } from "node:fs";
import App from '.';
import { render } from 'ink'
import { createHash } from "node:crypto";

function fingerprint(key) {
    const hash = createHash('sha256').update(key).digest('base64').replace(/=+$/, '')
    return 'SHA256' + hash
}

const { Server, utils } = ssh2

const server = new Server({ hostKeys: [readFileSync('host_ed25519')] }, (client) => {
    let visitor = 'anonymous'

    client.on('authentication', (ctx) => {
        if (ctx.method === 'publickey') {
            if (ctx.signature) {
                const key = utils.parseKey(ctx.key.data)
                if (key instanceof Error || key.verify(ctx.blob, ctx.signature, ctx.hashAlgo) != true) {
                    return ctx.reject()
                }
                visitor = fingerprint(ctx.key.data)
            }
            return ctx.accept()
        }
        if (ctx.method === 'keyboard-interactive') return ctx.accept()
        ctx.reject(['publickey', 'keyboard-interactive'])
    })

    client.on('ready', () => {
        client.on('session', (accept) => {
            const session = accept()
            let size = { cols: 80, rows: 24}
            let stream

            session.on('pty', (accept, _reject, info) => {
                size = {
                    cols: info.cols,
                    rows: info.rows,
                }
                accept?.()
            })

            session.on('window-change', (accept, _reject, info) => {
                size = {
                    cols: info.cols,
                    rows:  info.rows,
                }

                if (stream) {
                    stream.columns = info.cols
                    stream.rows = info.rows
                    stream.emit('resize')
                }
                accept?.()
            })

            session.on('shell', (accept) => {
                stream = accept()
                stream.isTTY = true
                stream.setRawMode = () => { }
                stream.ref = () => { }
                stream.unref = () => { }

                stream.columns = size.cols
                stream.rows = size.rows

                const app = render(<App visitor={visitor} />, {
                    stdout: stream,
                    stdin: stream,
                    patchConsole: false,
                })

                // Force one initial resize after render
                setTimeout(() => {
                    if (stream) stream.emit('resize')
                }, 50)

                app.waitUntilExit().then(() => {
                    stream.exit(0)
                    stream.end()
                })
            })
        })

    })
})

server.listen(23235, '0.0.0.0', () => {
  console.log('SSH portfolio listening on port 23235')
})
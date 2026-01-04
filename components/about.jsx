import React from "react";
import { Box, Newline, render, Spacer, Text, } from "ink";

const About = () => {
    return (
        <Box flexDirection="column" >
            <Box>
                <Text bold color={"yellowBright"} underline>
                    About Me
                    <Newline />
                </Text>
            </Box>
            <Box >
                <Text>
                    <Text color={"green"}  bold>Name: </Text><Text>Uday Pratap Singh</Text>
                    <Newline />
                    <Text color={"green"} bold>Role: </Text><Text>Backend Developer</Text>
                    <Newline />
                    <Text color={"green"} bold>Location: </Text><Text>Delhi-NCR, India</Text>
                    <Newline count={2} />
                    <Text>
                        Hi, I’m Uday Singh, a second-year B.Tech ECE student and a passionate developer who
                        loves building real-world projects. I work mainly in Python, Django, Fastapi.
                        I’m deeply interested in backend development and new emerging technologies like Generative AI, and I believe in learning by building.
                    </Text>
                    <Newline/>
                </Text>
            </Box>
            <Box>
                <Text>
                    <Text color={"yellowBright"} dimColor>
                        When I’m not writing code: <Newline/>
                    </Text>
                    <Text color={"whiteBright"} > -Watching anime</Text><Newline/>
                    <Text color={"whiteBright"} > -Reading philosophical books</Text><Newline/>
                    <Text color={"whiteBright"} > -Learning Japanese</Text><Newline/>
                </Text>
            </Box>

        </Box>
    );
};

export default About;
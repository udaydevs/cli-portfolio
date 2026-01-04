import React, { useState } from "react";
import { render, Box, Text, useInput, Newline } from "ink";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import About from "./components/about"
import Projects from "./components/projects";
import Contact from "./components/contact";
import Skills from "./components/skills";

const sideBars = ['About', "Projects", "Skills", "Socials"]

const App = () => {

  const [i, setI] = useState(0);
  const currentScreen = sideBars[i]

  useInput((input, key) => {
    if (input === "q" || key.ctrl && input === "c") {
      process.exit(0);
    }
    if (key.downArrow) {
      if (i < sideBars.length - 1) {
        setI((prev) => (prev + 1))
      }
    };
    if (key.upArrow && i > 0) {
      setI((prev) => (prev - 1))
    }
  });

  return (
    <Box flexDirection="column" width="100%" borderStyle={"double"} padding={1} >
      <Box flexDirection="column" alignItems="center" padding={2}>
        <Gradient name="instagram" padding={0}>
          <BigText text="Uday Pratap Singh" font="block" />
        </Gradient>
        <Text color="green" bold>Backend Developer | Generative AI Enthusiast</Text>
      </Box>

      <Box padding={1}>
        <Box flexDirection="column" width="15%" borderStyle="doubleSingle" borderColor='grey' padding={2}>
          {sideBars.map((value) => {
            return (
              <Box key={value} padding={0.5}>
                <Text color={currentScreen == value ? "green" : "blue"} bold >
                  {currentScreen == value ? ">" : "-"} {value}
                </Text>
              </Box>)
          })}
        </Box>
        <Box flexDirection="column" width="85%" borderStyle={"doubleSingle"} borderColor='grey' padding={2}>
          {currentScreen === "About" && (<About />)}
          {currentScreen === "Projects" && (<Projects />)}
          {currentScreen === "Socials" && (<Contact />)}
          {currentScreen === "Skills" && (<Skills />)}
        </Box>
      </Box>
      <Text dimColor>
        Press <Text color="cyan">Q</Text> or <Text color="cyan">Ctrl+C</Text> to exit
        <Newline />
        Use <Text color="whiteBright">↑</Text>/<Text color="whiteBright">↓</Text> to navigate
      </Text>
    </Box>
  );
};

render(<App />);

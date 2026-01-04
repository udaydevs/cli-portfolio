import React from "react";
import { Box, Newline, Text } from "ink";


const Skills = () => {
  return (
    <Box flexDirection="column" >
      <Text bold color={"yellowBright"} underline>
        Technical Skills
        <Newline />
      </Text>
      <Box flexDirection="column">
        <Text color={"green"} bold>Languages: </Text><Text>Python, Javascript, Java <Newline/></Text>
        <Text color={"green"} bold>Frameworks: </Text><Text>Django, Django Rest Framework, Langchain, LlamaIndex <Newline/></Text>
        <Text color={"green"} bold>Databases: </Text><Text>PostgreSQL, MySQL, MongoDB, Qdrant <Newline/></Text>
        <Text color={"green"} bold>Tools: </Text><Text>Git, GitHub, Figma, Linux <Newline/></Text>
      </Box>
    </Box>
  );
};

export default Skills;

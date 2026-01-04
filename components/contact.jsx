import React from "react";
import { Text, Box, Newline } from "ink";


const Contact = () => {
  return (
    <Box flexDirection="column" >
      <Text bold color={"yellowBright"} underline>
        Social Handles
        <Newline/>
      </Text>
      <Box flexDirection="column">
        <Text color={"green"} bold>Phone No.: </Text><Text>+91 9670157349<Newline/></Text>
        <Text color={"green"} bold>LinkedIn: </Text><Text underline>www.linkedin.com/in/uday-coder<Newline/></Text>
        <Text color={"green"} bold>Email: </Text><Text underline>mailto:udaysinghno2005@gmial.com<Newline/></Text>
        <Text color={"green"} bold>Github: </Text><Text underline>https://github.com/udaydevs<Newline/></Text>
      </Box>
    </Box>
  );
};

export default Contact;
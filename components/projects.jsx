import React from "react";
import { Box, Newline, render, Spacer, Text, } from "ink";

const Projects = () => {
  return (
    <Box flexDirection="column" >
      <Box>
        <Text bold color={"yellowBright"} underline>
          Projects
          <Newline />
        </Text>
      </Box>
      <Box >
        <Box borderStyle={"round"} padding={1} >
          <Text>
          <Text color={"green"} bold>Project Name: </Text><Text>SENSEI -- AI Tutor Platform</Text>
          <Newline />
          <Text color={"green"} bold>Tech Stack: </Text><Text>Next.js, FastAPI, LlamaIndex, Qdrant, PostgreSQL</Text>
          <Newline />
          <Text color={"green"} bold>Live Url: </Text><Text color={"blueBright"} underline>https://dashboard-mu-neon-70.vercel.app/home</Text>
          <Newline count={2} />
          <Text>
            Sensei is an AI-powered tutor designed to help users learn Japanese through interactive, one-to-one conversations. The system uses a Retrieval-Augmented Generation (RAG) approach to understand learner queries, retrieve relevant grammar rules, vocabulary, and examples, and generate accurate, context-aware explanations.
          </Text>
        </Text>
        </Box>
        <Box borderStyle={"round"} padding={1}>
          <Text>
          <Text color={"green"} bold>Project Name: </Text><Text>SHISHI -- Ecommerce Platform</Text>
          <Newline />
          <Text color={"green"} bold>Tech Stack: </Text><Text>Django, MySQL</Text>
          <Newline />
          <Text color={"green"} bold>Github Repo: </Text><Text color={"blueBright"} underline>https://github.com/udaydevs/shishi.git</Text>
          <Newline count={2} />
          <Text>
            A full-featured e-commerce backend with separate Admin and User panels. The Admin panel enables management of products, categories, users, and orders, along with PDF-based sales and order analytics. The User panel supports product browsing, order placement, and order tracking. The system is built with a modular architecture, focusing on security, scalability, and maintainable backend design.
          </Text>
        </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
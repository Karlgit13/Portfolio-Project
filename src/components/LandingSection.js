import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const avatar = "https://i.pravatar.cc/150?img=7";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

    <VStack>

      <Avatar src={avatar} size={150} />
      <Heading fontFamily="Courier New" paddingBottom={15} size={50}> {greeting} </Heading>
      <Heading fontFamily="Courier New"> {bio1} </Heading>
      <Heading fontFamily="Courier New"> {bio2} </Heading>

    </VStack>

  </FullScreenSection>
);

export default LandingSection;

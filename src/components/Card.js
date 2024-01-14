import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      bg={"white"}
      spacing={4}
      borderRadius={"lg"}
      alignItems={"flex-start"}
    >

      <Image
        src={imageSrc}
        alt={title}
        borderRadius={"lg"}
        width={"100%"}
        height={"100%"}
      />

      <VStack alignItems={"left"}>
        <Heading p={"10px 10px"} color={"black"} as={"h3"} size={"md"}>
          {title}
        </Heading>

        <Text p={"10px 10px"} color={"grey"}>
          {description}
        </Text>
      </VStack>

      <HStack alignSelf={"left"}>
        <Text p={"10px 10px"} color={"black"}>See more</Text>
        <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;

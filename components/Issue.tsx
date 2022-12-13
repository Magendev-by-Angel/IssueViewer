import {
  Box,
  Input,
  Flex,
  Grid,
  Button,
  Heading,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";

const DotStatus = ({ state }: { state: string }) => {
  return (
    <Box
      borderRadius="full"
      bg={state === "open" ? "red.300" : "green.300"}
      color={state === "open" ? "red.300" : "green.300"}
      boxShadow={`0 0 5px`}
      minH="1rem"
      maxH="1rem"
      minW="1rem"
      maxW="1rem"
      position="absolute"
      top={2}
      right={2}
      ml={2}
      cursor="pointer"
      transition="all 300ms ease-in-out"
      _hover={{
        boxShadow: "0 0 10px",
      }}
    ></Box>
  );
};

interface props {
  title: string;
  id: number;
  state: string;
  multiplier: number;
  number: number;
  link: string;
}

const Issue = ({ title, id, state, multiplier, number, link }: props) => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setOpacity(1);
  });
  return (
    <Flex
      key={id}
      justify="center"
      transition={`opacity 300ms ease-in-out ${multiplier * 100}ms`}
      opacity={opacity}
      maxW="100%"
      minW="100%"
      position="relative"
      border="1px solid"
      borderColor="whiteAlpha.500"
      borderRadius="md"
      padding={3}
      mb={3}
      direction="column"
      _hover
    >
      <DotStatus state={state} />

      <Heading
        as="h3"
        size="sm"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        maxW="95%"
        
      >
        <Link href={link} isExternal>
          <ExternalLinkIcon mx="2px" />
          {`${title.charAt(0).toUpperCase()}${title.slice(1)}`}
        </Link>
      </Heading>
      <Flex ml={5}>Issue Number: {number}</Flex>
    </Flex>
  );
};

export default Issue;

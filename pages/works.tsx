import React, { useState } from "react";
import {
  Card,
  Box,
  Flex,
  useDisclosure,
  Button,
  Text,
  Fade,
} from "@chakra-ui/react";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function MyComponent(props: any) {
  const [opa, setOpa] = useState(1);
  return (
    <Box>
      <Button
        onClick={() => {
          setOpa((prev) => {
            return prev === 1 ? 0 : 1;
          });
        }}
      >
        show
      </Button>
      {array.map((item, i: number) => (
        <Box
          transition={`opacity 300ms ease-in-out ${i * 200}ms`}
          opacity={opa}
          h={100}
          w={100}
          bg="purple.800"
          borderRadius="md"
          mb={4}
        >
          {i}
        </Box>
      ))}
    </Box>
  );
}

export default MyComponent;

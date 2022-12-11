import { Box, Input, Flex, Grid, Button, Heading } from "@chakra-ui/react";
import React from "react";

interface props {
    title: string;
    id: number;
    state: string;
}

const Issue = ({ title, id, state }: props) => {
    return (
        <Flex key={id} align="center">
            <Heading as="h3" size="lg">
                - {`${title.charAt(0).toUpperCase()}${title.slice(1)}`}
            </Heading>
            {state === "open" ? (
                <Box
                    borderRadius="full"
                    bg="red.300"
                    color="red.300"
                    boxShadow={`0 0 5px`}
                    height="1rem"
                    w="1rem"
                    ml={2}
                    cursor="pointer"
                    transition="all 300ms ease-in-out"
                    _hover={{
                        boxShadow: "0 0 10px",
                    }}
                ></Box>
            ) : (
                <Box
                    borderRadius="full"
                    bg="green.300"
                    color="green.300"
                    boxShadow={`0 0 5px`}
                    height="1rem"
                    w="1rem"
                    ml={2}
                    cursor="pointer"
                    transition="all 300ms ease-in-out"
                    _hover={{
                        boxShadow: "0 0 10px",
                    }}
                ></Box>
            )}
        </Flex>
    );
};

export default Issue;

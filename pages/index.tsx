import { Box, Input, Flex, Grid, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";
import RepositorySearch from "../components/RepositorySearch";
import OwnerRepositories from "../components/OwnerRepositories";
const Home = () => {
    const [posT, setPostT] = useState(-1000);
    const [posB, setPostB] = useState(-1000);
    return (
        <Grid
            templateAreas={`"top" "bot"`}
            templateColumns="1fr"
            templateRows="1fr 1fr"
            gap={5}
            mt={5}
        >
            {/*  */}
            <Button
                gridArea="top"
                onClick={() => {
                    if (posT === -1000 && posB === -1000) {
                        setPostT(0);
                    } else {
                        setPostT((prev) => (prev === -1000 ? 0 : -1000));
                    }
                }}
            >
                Looking for a repo?
            </Button>
            <Button
                gridArea="bot"
                onClick={() => {
                    if (posT === -1000 && posB === -1000) {
                        setPostB(0);
                    } else {
                        setPostB((prev) => (prev === -1000 ? 0 : -1000));
                    }
                }}
            >
                Looking for all repos of an account?
            </Button>
            <Box position="relative">
                <Box
                    position="absolute"
                    top={`${posT}px`}
                    w="100%"
                    transition="top 300ms ease"
                >
                    <RepositorySearch />
                </Box>
                <Box
                    position="absolute"
                    top={`${posB}px`}
                    w="100%"
                    transition="top 300ms ease"
                >
                    asdasdas
                </Box>
            </Box>
        </Grid>
    );
};
export default Home;

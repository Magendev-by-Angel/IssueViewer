import { Box, Input, Flex, Grid, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";
import RepositorySearch from "../components/RepositorySearch";
import OwnerRepositories from "../components/OwnerRepositories";
const Home = () => {
  return (
    <Box>
      <RepositorySearch />
    </Box>
  );
};
export default Home;

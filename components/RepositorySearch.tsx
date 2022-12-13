import { useState, useEffect } from "react";
import axios from "axios";
import Issue from "./Issue";
import { Box, Input, Flex, Grid, Button, Heading } from "@chakra-ui/react";
interface props {
  owner: string;
  name: string;
  setAlert: any;
  setData: any;
  setIsSearching: any;
}
const SearchButton = ({
  owner,
  name,
  setAlert,
  setData,
  setIsSearching,
}: props) => {
  return (
    <Button
      colorScheme="darkPurple"
      gridArea="button"
      color="white"
      onClick={async () => {
        if (owner !== "" && name !== "") {
          setData([]);
          setIsSearching(true);
          const { data } = await axios.get(
            `https://api.github.com/repos/${owner}/${name}/issues`
          );

          setData(data);
          setIsSearching(false);
        } else {
          if (name !== "" && owner === "") {
            setAlert({ l: "red.500", r: "inherit" });
          } else if (name === "" && owner !== "") {
            setAlert({ l: "inherit", r: "red.500" });
          } else {
            setAlert({ l: "red.500", r: "red.500" });
          }
        }
        setTimeout(() => {
          setAlert({ l: "inherit", r: "inherit" });
        }, 2500);
      }}
    >
      Search
    </Button>
  );
};

const RepositorySearch = () => {
  const [owner, setOwner] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState({ l: "inherit", r: "inherit" });
  const propButton = {
    owner: owner,
    name: name,
    setAlert: setAlert,
    setData: setData,
    setIsSearching: setIsSearching,
  };
  return (
    <Box w="100%">
      <Flex w="100%" align="center" transition="height 500ms ease-in-out">
        <Grid
          w="100%"
          mt={5}
          templateRows="repeat(1fr,4)"
          templateColumns="repeat(1fr,4)"
          templateAreas={`
			"tlOwner . tlName ."
			"inOwner inOwner inName inName "
			" alertOw . alertNm button "
            " bottomLine bottomLine bottomLine bottomLine"
		`}
          gap={3}
        >
          <Box ml={4} gridArea="tlOwner">
            Repository Owner
          </Box>
          <Input
            gridArea="inOwner"
            value={owner}
            onChange={(e) => {
              setOwner(e.target.value);
            }}
            borderColor={alert.l}
          />
          <Box ml={4} gridArea="tlName">
            Repository Name
          </Box>
          <Input
            gridArea="inName"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            borderColor={alert.r}
          />
          <SearchButton {...propButton} />
          <Box
            gridArea="bottomLine"
            borderBottom="1px solid"
            borderColor="whiteAlpha.300"
            mt={4}
          ></Box>
        </Grid>
      </Flex>
      <Box mt={5}>
        {data.length > 0 ? (
          data.map((item: any, i: number) => {
            const { id, title, state, number, html_url } = item;
            return (
              <Issue
                key={id}
                id={id}
                title={title}
                state={state}
                multiplier={i}
                number={number}
                link={html_url}
              />
            );
          })
        ) : isSearching ? (
          <Box>Searching...</Box>
        ) : (
          <Box></Box>
        )}
      </Box>
    </Box>
  );
};

export default RepositorySearch;

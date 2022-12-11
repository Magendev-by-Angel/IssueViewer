import { Box, Input, Flex, Grid, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import Issue from "../components/Issue";

const Home = () => {
    const getGitHubIssues = async (repository: string) => {
        setIsSearching(true);
        const { data } = await axios.get(
            `https://api.github.com/repos/${repository}/issues`
        );
        console.log(data);
        setData(data);
        setIsSearching(false);
        return data;
    };

    const [owner, setOwner] = useState<string>("angelzxz1");
    const [name, setName] = useState<string>("Teac");
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState({ l: "inherit", r: "inherit" });
    return (
        <Box w="100%">
            <Grid
                mt={5}
                templateRows="repeat(1fr,4)"
                templateColumns="repeat(1fr,3)"
                templateAreas={`
			"tlOwner . tlName ."
			"inOwner inOwner inName inName "
			" alertOw . alertNm button "
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
                <Button
                    colorScheme="darkPurple"
                    gridArea="button"
                    color="white"
                    onClick={async () => {
                        if (owner !== "" && name !== "") {
                            await getGitHubIssues(`${owner}/${name}`);
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
            </Grid>
            <Box
                borderBottom="1px solid"
                borderColor="whiteAlpha.300"
                mt={4}
            ></Box>
            <Box>
                {data.length > 0 ? (
                    data.map((item: any, i: number) => {
                        return (
                            <Issue
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                state={item.state}
                            />
                        );
                    })
                ) : isSearching ? (
                    <Box>Searching...</Box>
                ) : (
                    <Box>Nothing to show</Box>
                )}
            </Box>
        </Box>
    );
};
export default Home;

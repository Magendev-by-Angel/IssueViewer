// This si just a template that I normally use for Navigation bar
// but you can change it as you want!
// This navBar has a toggle button and a responsive menu for the links
// The Backgrounds are #ffffff40 are #20202380 with transparency and
// a backdropFilter: "blur(10px)"
//
import NextLink from "next/link";
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    useColorModeValue,
    IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./ThemeToggleButton";
import type { Router } from "next/dist/client/router"; //I use this import just to not use an any type
import LinkItem from "./LinkItem";

type props = {
    path: string;
};

const links = [{ href: "/", label: "Home" }];

const NavBar = ({ path }: props) => {
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("#ffffff40", "#20202380")}
            style={{ backdropFilter: "blur(10px)" }}
            zIndex={1}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-between"
            >
                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    w={{ base: "full", md: "auto" }}
                    align="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    {links.map((item, i) => (
                        <LinkItem key={i} href={item.href} path={path}>
                            {item.label}
                        </LinkItem>
                    ))}
                </Stack>
                <Flex flex={1} justify="end">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                {links.map((item, i) => (
                                    <NextLink href={item.href} passHref>
                                        <MenuItem as={Link}>
                                            {item.label}
                                        </MenuItem>
                                    </NextLink>
                                ))}
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default NavBar;

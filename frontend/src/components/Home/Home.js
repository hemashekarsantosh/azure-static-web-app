import React, { useState } from "react";

import {
    chakra,
    Flex,
    useColorModeValue,
    HStack,
    Button,
    InputGroup,
    InputRightElement,
    Input
} from "@chakra-ui/react";
import { AiFillHome, AiOutlineInbox, AiOutlineSearch } from "react-icons/ai";
import MyApprovals from '../MyApproval/MyApproval';
import Dashboard from '../Dashboard/Dashboard';




export default function Home() {
    const bg = useColorModeValue("white", "gray.800");
    const [task,showtask] = useState(false);
    const [dashboard,showDashboard] = useState(true);

    function showDash(){
        showDashboard(true)
        showtask(false)
    }

    function showTasks(){
        showtask(true)
        showDashboard(false)
    }
    return (
        <React.Fragment>
            <chakra.header
                bg={bg}
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <Flex>
                        <chakra.a
                            href="/"
                            title="eBPM q`a Home Page"
                            display="flex"
                            alignItems="center"
                        >
                        </chakra.a>
                        <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                            eBPM
            </chakra.h1>
                    </Flex>
                    <HStack display="flex" alignItems="center" spacing={1}>
                        <HStack
                            spacing={1}
                            mr={1}
                            color="brand.500"
                            display={{ base: "none", md: "inline-flex" }}
                        >
                            <Button colorScheme="teal" w="full"
                                variant="solid" leftIcon={<AiFillHome />} onClick={() => showDash()}>
                                Dashboard
                            </Button>

                            <Button variant="solid" colorScheme="teal" w="full"
                                leftIcon={<AiOutlineInbox />} onClick={() => showTasks()}>Inbox</Button>

                        </HStack>
                        <InputGroup>
                            <InputRightElement
                                pointerEvents="none"
                                children={<AiOutlineSearch />}
                            />
                            <Input type="tel" placeholder="Search..." />
                        </InputGroup>

                    </HStack>
                </Flex>
            </chakra.header>
            {task ? <MyApprovals /> : ""}
            {dashboard ? <Dashboard /> : ""}
        </React.Fragment>
    );
}
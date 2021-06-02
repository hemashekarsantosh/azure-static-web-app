import React, {useState, useEffect} from "react";
import {
  chakra, 
  Flex,
  useColorModeValue,
  Button,
  Stack,
  SimpleGrid,
  HStack,
  Spinner,
  Center
} from "@chakra-ui/react";



import { getMyApprovals }from '../../services/DemoApi'


export default function MyApprovals() {
    const bg=useColorModeValue("white", "gray.800");
    const bg1=useColorModeValue("gray.100", "gray.700");
    const bg2=useColorModeValue("gray.500")
    const [isLoading,setLoading]= useState(true)
    const [data,setData]=useState()


   useEffect(() => {
       getMyApprovals().then(data => {
        setData(data.data.payload)
        setLoading(false)
       });
   }, []);

   if(isLoading){
     return <div> <Center><Spinner
     thickness="4px"
     speed="0.65s"
     emptyColor="gray.200"
     color="blue.500"
     size="xl"

   /></Center></div>
   }
    
  return (
   
    <Flex
      w="full"
     
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ sm: bg }}
        shadow="lg"
      > 
          { (data.length > 0) && (
                <SimpleGrid
                  spacingY={3}
                  columns={{ base: 1, sm: 6 }}
                  w={{ base: 100, sm: "full" }}
                  textTransform="uppercase"
                  bg={bg1}
                  color={bg2}
                  py={{ base: 1, sm: 4 }}
                  px={{ base: 2, sm: 10 }}
                  fontSize="sm"
                  fontWeight="bold"
                >
                  <span>App Name</span>
                  <span>Request Number</span>
                  <span>Company</span>
                  <span>MEP</span>
                  <span>Total USD</span>
                  <span>Action</span>
                </SimpleGrid>
              )}
        {data.map((task, pid) => {
      
          return (
            <Flex
              direction={{ base: "row", sm: "column" }}
              bg={bg}
            >
                

              
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, sm: 6 }}
                w="full"
                py={2}
                px={10}
                fontWeight="medium"
              >
                <span >{task.appName}</span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {task.requestNumber}
                </chakra.span>
                <span>{task.company}</span>
                <span>{task.mep}</span>
                <span>{task.totalUSD}</span>
                <span>
                    <HStack>
                    <Button variant="solid" w="75" colorScheme="teal" size="sm">
                    View
                  </Button>
                    <Button variant="solid" w="75" colorScheme="green" size="sm">
                    Approve
                  </Button>
                  <Button variant="solid" w="75" colorScheme="red" size="sm">
                    Reject
                  </Button>
                    </HStack>
                 
                </span>
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
}
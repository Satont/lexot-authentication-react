import React from "react";
import { Box, Flex, SimpleGrid, Image } from "@chakra-ui/react";

export const AdminBody: React.FC = () => {
  return (
    <Box h={`calc(100vh - 80px)`} bg={"#141517"}>
      <Flex justifyContent={"center"} alignItems={"center"} h={"100%"}>
        <SimpleGrid w={"500px"}>
          <Image src="https://cdn-icons-png.flaticon.com/512/2343/2343177.png" />
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

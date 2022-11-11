import React from 'react'
import { RotatingLines } from "react-loader-spinner";
import { Flex } from "@chakra-ui/react";


const Reactloader = () => {
  const loading = true
  
  if (loading ) {
    return (
      <Flex
        justify="center"
        align={"center"}
        top="0"
        h="100vh"
        w="100vw"
        position="fixed"
        zIndex={99999}
        bg="white"
        opacity={0.6}
      >
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="76"
          visible={true}
        />
      </Flex>
    )
  }
  
}

export default Reactloader

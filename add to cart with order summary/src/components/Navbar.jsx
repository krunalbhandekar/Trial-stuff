import React from 'react'
import {Box,Flex,Button,
useColorModeValue,useColorMode
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';


const Navbar = () => {
  const getcartdata=useSelector((state)=>state.Cartreducer.carts)
 const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
         <Link to="/">Home</Link>
         <div>
         <Link to="/cart">Cart</Link>
         <p>{getcartdata.length>0 && getcartdata.length}</p>
         </div>
        
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            
       
        </Flex>
      </Box>
    </>
  );
}

export default Navbar
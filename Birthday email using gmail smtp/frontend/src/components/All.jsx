import React,{useState,useEffect} from 'react'
import { Input,Flex,Button, Box,Text, Heading } from '@chakra-ui/react'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'



const All = () => {
  const [data, setdata] = useState([])
    const toast = useToast()
  

  const getdata=()=>{
     var config = {
  method: 'get',
  url: 'http://localhost:8080/all',
  headers: {'Content-Type': 'application/json' }
};

axios(config)
.then(function (response) {
  // console.log(response.data.data);
  setdata(response.data.data)
})
.catch(function (error) {
  console.log(error);
});
  }

  const handeldelete=(id)=>{
  const config = {
  method: 'delete',
  url: `http://localhost:8080/${id}`,
  headers: { 
    'Content-Type': 'application/json'
  },
};

axios(config)
.then(function (response) {
     toast({
          title: 'Deleted',
          status: 'success',
          duration: 3000,
          position:"top",
          isClosable: true,
        })
  getdata()
})
.catch(function (error) {
  console.log(error);
});
}

useEffect(()=>{
   getdata()
  },[])


  return (
     <Box border="2px solid black" p="20px" w="90%" m="auto">
       {data.map((e) => {
         return(
           <Flex  key={e._id} p="20px" border="2px solid black" justifyContent="space-between">
            <Flex direction="column">
         <Text fontSize="0.8rem">{e.first_name +" "+ e.last_name}</Text>
         <Text fontSize="0.5rem">{e.birth_date +"/"+ e.birth_month}</Text>
         <Text fontSize="0.5rem">{e.email}</Text>
            </Flex>
            <Button onClick={()=>handeldelete(e._id)}>Delete</Button>
          </Flex>
        )
      })}
    </Box>
  )
}

export default All
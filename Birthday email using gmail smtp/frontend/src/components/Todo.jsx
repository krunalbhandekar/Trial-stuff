import React,{useState,useEffect} from 'react'
import { Input,Flex,Button, Box,Text, Heading } from '@chakra-ui/react'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
const Todo = () => {
    const [form, setform] = useState({})
    const [data, setdata] = useState([])
    const toast = useToast()

    const onchange=(e)=>{
        const {name,value}=e.target
        setform({...form , [name]:value})
    }
    
    const handeladd=()=>{
        if(form.title && form.description){
           const config = {
            method: 'post',
            url: 'http://localhost:8080/todo/add',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : JSON.stringify(form)
            };

            axios(config)
            .then(function (response) {
                 toast({
                    title: 'Todo added',
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
        }else{
            toast({
          title: 'Please fill all the details',
          status: 'warning',
          duration: 3000,
          position:"top",
          isClosable: true,
        })
        }
    }

  const getdata=()=>{
  const config = {
  method: 'get',
  url: 'http://localhost:8080/todo/all',
  headers: { }
};

axios(config)
.then(function (response) {
  setdata(response.data.data)
})
.catch(function (error) {
  console.log(error);
});
}
const handeldelete=(id)=>{
  const config = {
  method: 'delete',
  url: `http://localhost:8080/todo/${id}`,
  headers: { 
    'Content-Type': 'application/json'
  },
};

axios(config)
.then(function (response) {
     toast({
          title: 'Todo deleted',
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
    <Box width="90%" m="auto" >
    <Flex  gap="20px" border="2px solid black" p="20px">
        <Input name="title" onChange={onchange} required placeholder='Title'/>
        <Input name="description" onChange={onchange} required placeholder='Description'/>
        <Button onClick={handeladd}>ADD</Button>
    </Flex>
    <Box  p={data.length ? "20px" : 0} overflowY="scroll" maxH="400px" mt="20px" border="2px solid black">
    {data && data.map((e)=>(
        <Flex key={e._id} justifyContent="space-between">
            <Flex direction="column">
            <Heading>{e.title}</Heading>
            <Text>{e.description}</Text>
            </Flex>
            <Flex>
                <Button onClick={()=>handeldelete(e._id)}>Delete</Button>
            </Flex>
        </Flex>
    ))}
    </Box>
    </Box>
  )
}

export default Todo
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,Button,ModalCloseButton, FormControl,Input,Select,Flex} from '@chakra-ui/react'
import { useDisclosure,useToast } from '@chakra-ui/react'

const AddFriends = ({getcurrent}) => {
     const { isOpen, onOpen, onClose } = useDisclosure()
     const [form, setform] = useState({})
      const toast = useToast()
      const datearr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
      const montharr=[{mon:"January",val:1},{mon:"February",val:2},{mon:"March",val:3},{mon:"April",val:4},{mon:"May",val:5},{mon:"June",val:6},{mon:"July",val:7},
        {mon:"August",val:8},{mon:"September",val:9},{mon:"October",val:10},{mon:"November",val:11},{mon:"December",val:12},]

  const onchange=(e)=>{
    let {name,value}=e.target
      setform({...form,[name]:value})
  }

     const handlesubmit=()=>{
var config = {
  method: 'post',
  url: 'http://localhost:8080/add',
  data : form
};

axios(config)
.then(function (response) {
  console.log(response.data);
  if(response.data.message=="info added succesfully"){
    toast({
          title: response.data.info.first_name+" "+response.data.message,
          position: "top",
          // description: "We've created your account for you.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
  }else{
    toast({
          title:response.data.message,
          position: "top",
          // description: "We've created your account for you.",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
  }
  
  getcurrent()
  onClose()
})
.catch(function (error) {
  console.log(error);
});
}
  return (
    <>
    <Button colorScheme='blue' onClick={onOpen}>Add info</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <div>
      <FormControl>
        <div>
          <Input type="text" name="first_name" placeholder='first name' onChange={onchange}/>
        </div>
        <div>
          <Input type="text" name="last_name" placeholder='last name' onChange={onchange}/>
        </div>
        <Flex>
          <Select placeholder='Birth Date' name="birth_date" onChange={onchange}>
            {datearr.map((e)=>(
               <option key={e} value={e}>{e}</option>
            ))}
          </Select>
          <Select placeholder='Birth Month' name="birth_month" onChange={onchange}>
            {montharr.map((e)=>(
               <option key={e.val} value={e.val}>{e.mon}</option>
            ))}
           
          </Select>

        </Flex>
        <div>
          <Input type="number" name="mobile_no" placeholder='Mobile' onChange={onchange}/>
        </div>
        <div>
          <Input type="email" name="email" placeholder='email' onChange={onchange}/>
        </div>
        <div>
          <Input type="text" name="description" placeholder='description' onChange={onchange}/>
        </div>
        <div><Button onClick={handlesubmit}>Add</Button></div>
      </FormControl>
    </div>
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  )
}

export default AddFriends
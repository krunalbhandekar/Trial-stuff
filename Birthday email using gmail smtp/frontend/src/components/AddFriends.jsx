import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,Button,ModalCloseButton, FormControl,Input
} from '@chakra-ui/react'
import { useDisclosure,useToast } from '@chakra-ui/react'

const AddFriends = ({getcurrent}) => {
     const { isOpen, onOpen, onClose } = useDisclosure()
     const [form, setform] = useState({})
      const toast = useToast()

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
        <div>
          <Input type="date" name="birth_date" placeholder='DOB' onChange={onchange}/>
        </div>
        <div>
          <Input type="number" name="mobile_no" placeholder='Mobile' onChange={onchange}/>
        </div>
        <div>
          <Input type="text" name="email" placeholder='email' onChange={onchange}/>
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
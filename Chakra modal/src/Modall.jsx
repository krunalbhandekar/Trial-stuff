import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

const Modall = ({e}) => {
  // console.log('e:', e)
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const hadleclick=(id)=>{
      console.log("yes",id);
    }
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{e.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
           <h1>{e.id}{e.name}</h1>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={()=>hadleclick(e.id)}>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
 
}

export default Modall

import React from 'react'
import Modall from './Modall'
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


const Abc = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let arr=[
        {name:"krunal",id:1},
        {name:"shivam",id:2},
        {name:"ravi",id:3},
        {name:"onkar",id:4},
        {name:"rohit",id:5},
        {name:"ganesh",id:6},
        {name:"akshay",id:7},
    ]
  return (
    <div>
    {arr.map((e)=>(
       
          <div key={e.id}>

        <button >{e.name}</button>
           <Modall e={e}/>  
          </div>  
        )
    )}
    </div>
  )
}

export default Abc

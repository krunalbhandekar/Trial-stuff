import React,{useState} from 'react'
import Cardsdata from "./CardsData"
import { useDispatch } from 'react-redux'
import { Box,Image,Heading,Text,Button } from '@chakra-ui/react'
import {ADD} from "../redux/action"

const Home = () => {
  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch();

  const send=(e)=>{
    dispatch(ADD(e))
  }

  return (
    <div >
        <h2 >Add to Cart Projects</h2>
        <div >
        {data.map((el)=>{
            return (
                
                <Box style={{ width: '22rem',border:"none" }} key={el.id}>
                <Image src={el.imgdata} style={{height:"16rem"}}  ></Image>
                <Box>
                <Heading>{el.rname}</Heading>
                <Text>Price : ₹ {el.price}</Text>
                <div >
                    <Button   
                      onClick={()=> send(el)}
                     >Add to Cart</Button>
                    </div>
                </Box>
                </Box>
                
            )
        })}
           </div>

    </div>
  )
}

export default Home
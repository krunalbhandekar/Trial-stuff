import React,{useState,useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {ADD,REMOVECART,REMOVEONE} from "../redux/action"
import { Link } from 'react-router-dom'
import {Box,Flex,Heading,HStack,Stack,Image,Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import CartItem from './CartItem'
import CartOrderSummary from './CartOrderSummary'

const Cart = () => {
    const cartdata=useSelector((state)=>state.Cartreducer.carts)
    const [tprice,setTprice] = useState(0);

  const dispatch = useDispatch();

    const onClickDelete=(id)=>{
      dispatch(REMOVECART(id))
    }
    const onClickRemove=(el)=>{
      dispatch(REMOVEONE(el))
    }
    const send=(el)=>{
      dispatch(ADD(el))
    }

  const total = ()=>{
        let price = 0;
        cartdata.map((ele)=>{
            price = ele.price * ele.qnty + price
        });
        setTprice(price);
    };

    useEffect(()=>{
        total();
    },[total])
    
    if(cartdata.length){
 
  return (
      <Box
    maxW={{
      base: '3xl',
      lg: '7xl',
    }}
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '12',
    }}
    py={{
      base: '6',
      md: '8',
      lg: '12',
    }}
  >
    <Stack
      direction={{
        base: 'column',
        lg: 'row',
      }}
      align={{
        lg: 'flex-start',
      }}
      spacing={{
        base: '8',
        md: '16',
      }}
    >
      <Stack
        spacing={{
          base: '8',
          md: '10',
        }}
        flex="2"
      >
        <Heading fontSize="2xl" fontWeight="extrabold">
          Shopping Cart {cartdata.length} items
        </Heading>

        <Stack spacing="6">
          {cartdata.map((item) => (
            <CartItem key={item.id} e={item} onClickDelete={onClickDelete} onClickRemove={onClickRemove} send={send}/>
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartOrderSummary tprice={tprice}/>
        <HStack mt="6" fontWeight="semibold">
          <p>or</p>
          <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
        </HStack>
      </Flex>
    </Stack>
  </Box>

)
}
else{
return (
  <Flex justifyContent="center" alignItems="center">
    <Image src="https://shop.millenniumbooksource.com/static/images/cart1.png"/>
    
  </Flex>
)
}
}

export default Cart
import React,{useEffect, useState} from 'react'
import {Button,Flex,Heading,Link,Stack,Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'

const OrderSummaryItem = (props) => {
  const { label, value, children } = props
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  )
}


const CartOrderSummary = ({tprice}) => {
    const [shipping, setshipping] = useState(0)
    
    const total = ()=>{
        let price = 0;
        if(tprice<500){
            price=Number(50)
        }
        setshipping(price);
    };

    useEffect(()=>{
        total();
    },[tprice])
    
  return (
   <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={`₹ ${tprice}`} />
        <OrderSummaryItem label="Shipping + Tax" value={`₹ ${shipping}`}>
          
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {`₹ ${tprice+shipping}`}
          </Text>
        </Flex>
      </Stack>
      <Button colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
        Checkout
      </Button>
    </Stack>
  )
}

export default CartOrderSummary
import React from 'react'
import { Button, CloseButton, Flex, Link } from '@chakra-ui/react'
import CartProductMeta from './CartProductMeta'



const CartItem = ({e,onClickDelete,onClickRemove,send}) => {
  return (
     <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        rname={e.rname}
        address={e.address}
        imgdata={e.imgdata}
        price={e.price}
        rating={e.rating}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <Flex justifyContent="space-between" alignItems="center" gap="15px" cursor="pointer">

            <span style={{fontSize:24}} onClick={e.qnty <=1 ? ()=>onClickDelete(e.id) : ()=>onClickRemove(e)}>-</span>
            <span style={{fontSize:22}}>{e.qnty}</span>
            <span style={{fontSize:24}} onClick={()=>send(e)}>+</span>

        </Flex>
        
       
        <Button fontSize="sm" onClick={()=>onClickDelete(e.id)}>
          Remove
        </Button>
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <Button fontSize="sm" onClick={()=>onClickDelete(e.id)}>
          Remove
        </Button>

         <Flex justifyContent="space-between" alignItems="center" gap="15px" cursor="pointer">

            <span style={{fontSize:24}} onClick={e.qnty <=1 ? ()=>onClickDelete(e.id) : ()=>onClickRemove(e)}>-</span>
            <span style={{fontSize:22}}>{e.qnty}</span>
            <span style={{fontSize:24}} onClick={()=>send(e)}>+</span>

        </Flex>

        
      </Flex>
    </Flex>
  )
}

export default CartItem
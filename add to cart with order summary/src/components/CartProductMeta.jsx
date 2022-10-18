import React from 'react'
import {Box,HStack,Icon,Image,Link,Stack,Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'

const CartProductMeta = (props) => {
      const { rname,address,imgdata,price,rating } = props
  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={imgdata}
        alt={rname}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{rname}</Text>
          <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
            {address}
          </Text>
          <Text fontWeight="medium">{price}</Text><Text fontWeight="medium">{rating}</Text>
        </Stack>
        
      </Box>
    </Stack>
  )
}

export default CartProductMeta
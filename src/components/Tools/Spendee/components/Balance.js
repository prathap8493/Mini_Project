import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'


const BalanceText = styled(Typography)({
    fontSize: '1.4rem',
    marginBottom: '20px',
})

const Balance = ({transaction}) => {
  const amount = transaction.reduce((acc,item)=>{
    return acc + item.amount
  } ,0).toFixed(2)
  return (
  <>
   <Box>
       <BalanceText>Balance : ₹ {amount}</BalanceText>
   </Box>
  </>
  )
}

export default Balance

import { Box, Button, TextField, Typography ,styled} from '@mui/material'
import React,{useState} from 'react'


const Boxcontainer = styled(Box)`
    display: flex;
    flex-direction: column;
    & > h5,& >div, &>Button{
        margin-top:30px
    }
    `

const Transactions = ({setTransaction}) => {
  const [text,setText] = useState('')
  const [amount,setAmount] = useState(0)

  const handleSubmit = (e) => {
    const transaction = {
      id: Math.floor(Math.random()*100000),
      name: text,
      amount: +amount
    }
    
    console.log(amount)
    console.log(text)
    setText('')
    setAmount(0)
    console.log(amount)
    console.log(text)
    setTransaction(prev => [transaction,...prev])
  }

  return (
    <>
        <Boxcontainer>
            <Typography variant='h5'>New Transactions</Typography>
            <TextField value={text} onChange={(e)=>setText(e.target.value)} label='Enter Expenses'/>
            <TextField value={amount} onChange={(e)=>setAmount(e.target.value)} label='Enter Amount'/>
            <Button onClick={handleSubmit} variant='contained'>Add Transaction</Button>
        </Boxcontainer>
    </>
  )
}

export default Transactions

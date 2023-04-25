import { ListItemText,ListItem,styled, ListItemIcon } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'


const Details = styled(ListItem)`
  margin-top: 10px;
`

const SingleTransaction = ({transaction,setTransaction}) => {
  const backgroundColor = transaction.amount > 0 ? '#C6F6D5' : '#F6D5D5'

  const handleDelete = (id)=>{
    setTransaction(prev => prev.filter(item => item.id !== id))
  }
  return (
    <>
     <Details style={{background:`${backgroundColor}`,color:"black"}}>
     <ListItemIcon onClick={()=>handleDelete(transaction.id)}><DeleteIcon /></ListItemIcon>
        <ListItemText  >{transaction.name}</ListItemText>
        <ListItemText  >{transaction.amount}</ListItemText>
     </Details>
    </>
  )
}

export default SingleTransaction

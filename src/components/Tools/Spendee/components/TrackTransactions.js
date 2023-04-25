import { Box, Divider, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import SingleTransaction from './SingleTransaction'

const TrackTransactions = ({transactions,setTransaction}) => {    
  return (
    <>
        <Box>
            <Typography variant='h5' >Transactions History</Typography>
            <Divider />
            <List>
               {
                transactions.map((item)=>{
                    return <SingleTransaction  transaction={item} setTransaction={setTransaction}/>

                })
               }
            </List>
        </Box>
    </>
  )
}

export default TrackTransactions

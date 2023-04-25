import { Card ,Box, CardContent, Typography,styled} from '@mui/material'
import React from 'react'



const Boxcontainer = styled(Box)`
    display: flex;
    & > div {
        flex: 1;
        padding: 10px;
        
    }
    `
const ExpenseCard = ({transaction}) => {
    const income = transaction.filter(item=>item.amount>0)
    const totalIncome = income.reduce((acc,item)=>{ return acc + item.amount},0).toFixed(2)
    const expense = transaction.filter(item=>item.amount<0)
    const totalExpense = expense.reduce((acc,item)=>{ return acc + item.amount},0).toFixed(2)

  return (
    <>
        <Boxcontainer>
            <Card>
                <CardContent>
                    <Typography>Income :</Typography>
                    <Typography> {totalIncome}</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>Expense :</Typography>
                    <Typography> {totalExpense}</Typography>
                </CardContent>
            </Card>
        </Boxcontainer>
    </>
  )
}

export default ExpenseCard

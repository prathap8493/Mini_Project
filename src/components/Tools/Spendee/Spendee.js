import React,{useState,useEffect} from 'react';
import {Typography,styled, Box} from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import  DisplayChart from '../Spendee/components/DisplayChart';
import  Balance from '../Spendee/components/Balance';
import  ExpenseCard from '../Spendee/components/ExpenseCard';
import  Transactions from '../Spendee/components/Transactions';
import  TrackTransactions from '../Spendee/components/TrackTransactions';
import { motion } from 'framer-motion';

// local storage
const getLocalTransactions = ()=>{
    const transactions = localStorage.getItem('transactions')
    return transactions ? JSON.parse(transactions) : []
  }
  
  
  const Header = styled(Typography)({
    color: '#3046b3',
    fontSize: '2rem',
    textTransform: 'uppercase',
    marginBottom: '12rem'
  
  })
  
  const BoxComponent = styled(Box)({
    display: 'flex',
    width:'1000px',
    background: '#f6f6f6',
    padding: '10px',
    borderRadius: '10px',
    margin:'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& > div': {
      width: '50%',
      margin: '10px',
    },
  })  


  const BoxB = styled(Box)({
    background: '',
  })

const Spendee = () => {
    const [transaction,setTransaction] = useState(getLocalTransactions())
    const [chartdata,SetChartData] = useState({
      labels:transaction.map(item=>item.name),
      datasets:[{
        label:'',
        data:[],
      }]
    })
  
    useEffect(()=>{
      localStorage.setItem('transactions',JSON.stringify(transaction))
      // render chart
      SetChartData({
        labels:transaction.map(item=>item.name),
        datasets:[{
          label:'Expense',
          data:transaction.map(item=>item.amount),
          backgroundColor:["#FF6384","#FFCD56","#36A2EB","#36a2eb","#d936eb"],
          borderColor:["grey"],
          borderWidth:1
        }]
      })
      
    },[transaction])
  return (
<>
        <motion.Box
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.5 }}
          
            >
               <Header  variant="p"><AccountBalanceWalletIcon   style={{fontSize:"40px"}}/>  spendee</Header>
          </motion.Box>
            <BoxComponent>
              <Box>
                <DisplayChart chartdata={chartdata}/>
              </Box>
                <Box>
                  <Balance transaction={transaction}/>
                  <ExpenseCard transaction={transaction}/>
                  <Transactions setTransaction={setTransaction}/>
                </Box>
                <Box>
                <TrackTransactions transactions={transaction} setTransaction={setTransaction}/>
                </Box>
            </BoxComponent>
    </>
  )
}

export default Spendee

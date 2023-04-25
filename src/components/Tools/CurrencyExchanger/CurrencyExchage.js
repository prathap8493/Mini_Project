import React, { useState } from 'react'
import axios from 'axios';
import Dropdown from './Dropdown';
import { motion } from 'framer-motion';
const CurrencyExchage = () => {
    const [firstCurrency,setFirstCurrency]=useState("")
    const[secondCurrency,setSecondCurrency] = useState("")
    const [amount,setAmount] = useState(0)
    const handleClick = ()=>{
        const options = {
          method: 'GET',
          url: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',
          params: {have: `${firstCurrency}`, want: `${secondCurrency}`, amount: `${amount}`},
          headers: {
            'X-RapidAPI-Key': '9c2bb9bb51msha6379474ab7af30p14325cjsnacc168d28352',
            'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
          }
        };
       axios.request(options).then(function (response) {
            setAmount(response.data.new_amount)
        }).catch(function (error) {
            console.error(error);
        });      
    }
  const handleChange = ()=>{
    const temp = firstCurrency;
    setFirstCurrency(secondCurrency);
    setSecondCurrency(temp);
  }
    
  return (
   <>

   <div className='currencymain'>
   <motion.div className='currencybody  text-center'
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.5 }}   >
   <h1 className='text-center'>Real Time CurrencyExchage</h1>
   <Dropdown value={firstCurrency} setCurrency={setFirstCurrency} />
   <Dropdown value={secondCurrency} setCurrency={setSecondCurrency}/>
   <button className='btn btn-primary exchange' onClick={handleClick}>Exchange</button>
   <div className='exvchangebutton'>
   <button onClick={handleChange}><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root cc49" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></svg></span></button>
   </div>
   <div className='inputoutputfields'>
   <input type="number"  onChange={(e)=>setAmount(e.target.value)}/>
    <input value={amount} />
    </div>
   </motion.div>
   </div>
   </>
  )
}

export default CurrencyExchage
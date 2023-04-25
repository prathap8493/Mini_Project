import React,{useState} from 'react'
import './calculator.css';
import { motion } from 'framer-motion';
const Calculator = () => {
    const[results,setResults] = useState("")
    const handleClick=(e)=>{
        setResults(results.concat(e.target.name));
    }
    const clear = ()=>{
        setResults("")
    }
    const backspace = ()=>{
        setResults(results.slice(0,results.length-1));
    }
    const calculate = ()=>{
        try{
            setResults(eval(results).toString())
        }catch(err){
            setResults("Error")
        }

    }

  return (
        <>
        <motion.div className='main'
       initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.5 }}   
        >

            <div className="container1">
                <form>
                    <input className='results' type="text" value={results}/>
                </form>
                <div className='keypad'>
                    <button className='highlight buttoncss' onClick={clear} id='clear'>Clear</button>
                    <button className='highlight buttoncss' onClick={backspace} id='backspace'>C</button>
                    <button className='highlight buttoncss' name='/' onClick={handleClick}>&divide;</button>
                    <button className='buttoncss' name='7' onClick={handleClick}>7</button>
                    <button name='8' className='buttoncss'  onClick={handleClick}>8</button>
                    <button name='9'  className='buttoncss' onClick={handleClick}>9</button>
                    <button className='highlight buttoncss' name='*' onClick={handleClick}>&times;</button>
                    <button name='4'  className='buttoncss' onClick={handleClick}>4</button>
                    <button name='5' className='buttoncss'  onClick={handleClick}>5</button>
                    <button name='6' className='buttoncss'  onClick={handleClick}>6</button>
                    <button className='highlight buttoncss' name='-' onClick={handleClick}>-</button>
                    <button name='1' className='buttoncss'  onClick={handleClick}>1</button>
                    <button name='2' className='buttoncss'  onClick={handleClick}>2</button>
                    <button name='3'  className='buttoncss' onClick={handleClick}>3</button>
                    <button className='highlight buttoncss' name='+' onClick={handleClick}>+</button>
                    <button name='0'  className='buttoncss' onClick={handleClick}>0</button>
                    <button name='.'  className='buttoncss' onClick={handleClick}>.</button>
                    <button name='%'  className='buttoncss highlight' onClick={handleClick}>%</button>
                    <button className='highlight buttoncss' name='=' onClick={calculate} id='result'>=</button>
                </div>
            </div>
        </motion.div>
        </>
    )
}

export default Calculator
import React,{useState} from 'react'
import OutputJson from './OutputJson'
import './jsonFormatter.css';
import {motion} from 'framer-motion'

const JsonFormatter = () => {
    const [json,setJson] = useState("")
    const [data,setData] = useState("")
    const handleJsonInput = (e)=>{
        setData(json)
    }
    console.log(data)

  return (
    <>
    <h1 className='text-center m-t'>JSON Formatter</h1>
            <motion.div 
                 initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.5 }}
            className='row'>
                <div className='col-md-6 m-5'>
                    <h1>Enter raw json dat</h1>
                    <textarea
                        rows="15"
                        className='form-control jsonInput' 
                        value={json}
                        onChange={(event) => setJson(event.target.value)}/>
                          <div className='text-center d-flex justify-content-around mt-4'>
                        <button className='btn btn-info' onClick={handleJsonInput}>Format</button>
                        <button className='btn btn-danger' onClick={() => setJson("")}>clear</button>
                      </div>
                </div>
{/* Speech to text */}
                <div className='col-md-6 m-5 '>
                <h1>Formatted JSON</h1>
                    <div>
                <OutputJson jsonData={data} />

                    </div>
                </div>
        </motion.div>
    </>
  )
}

export default JsonFormatter
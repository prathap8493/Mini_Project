import React,{useState} from 'react';
import './BoxShadow.css';
import { boxShadow } from './data';
// import {CopyToClipboard} from 'react-copy-to-clipboard';
import copy from "copy-to-clipboard";
import ReactTooltip from 'react-tooltip';
import { ToastContainer, toast } from 'react-toastify';
import {motion} from 'framer-motion';



const BoxShadow = () => {
    const [copied, setCopied] = useState('');
    const notify = () => toast.success("Copied");
  return (
    <>
    <motion.div 
     initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.5 }}   

        >
        <div className='m-5 text-center boxshadow-heading w-50'>
            <h2 className='m-5'>Beautiful CSS box-shadow examples</h2>
            <p>All of these box-shadow were copied using <a href='https://getcssscan.com/?ref=beautifulboxshadow'> CSS Scan 3.0</a> .With CSS Scan you can easily inspect or copy any website's CSS.📌 Press Ctrl+D to bookmark this page</p>
        </div>
            <div className='box-shadow-main'>
                <div></div>
            <div className="box-shadow-card " data-toggle="tooltip" data-placement="top" title="hello"  >
                {
                    boxShadow.map((boxShadow) => {
                        return (
                        <div className="box-shadow-card-value"  data-tip={"Click to copy box shodow " + boxShadow.id } style={{boxShadow:`${boxShadow.boxShadowValue}`,backgroundColor:"white"}} onClick={()=>{
                            setCopied(copy(`box-shadow: ${boxShadow.boxShadowValue};`))
                            notify()
                            }} >
                                <span className='box-shadow-id'>#{boxShadow.id} </span>
                                <p></p>
                                <ReactTooltip />
                        </div> 
                        )
                    })
                }
                </div>
                {/*  */}
                <div></div>
                </div>
        </motion.div>
        <ToastContainer />
    </>
  )
}

export default BoxShadow
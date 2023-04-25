import React,{useState} from 'react';
import Tesseract from 'tesseract.js';
import { motion } from 'framer-motion';
import './imgToText.css';
import { ToastContainer, toast } from 'react-toastify';
import copy from "copy-to-clipboard";

const ImgToText = () => {
  const [isLoading,setIsLoading]= useState(false);
  const [text,setText] = useState("");
  const [image,setImage] = useState("");
  const [progress,setProgress] = useState(0);
  const [show, setShow] = useState(true);
  const copyPassword = () => toast.success("Copied to Clipboard",{
    position: "top-center",
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  const handleClick = () => {
    setIsLoading(true)
    Tesseract.recognize(
      image,
      'eng',
      { logger: m => {
        console.log(image)
        console.log(m)
        if(m.status==="recognizing text"){
          setProgress(parseInt(m.progress*100))
        }
      }}
    ).then(({ data: { text } }) => {
      console.log(text);
      setText(text)
      setIsLoading(false)
    })
  }
  const handleBack =()=>{
    setText("")
    setImage("")
    setProgress(0)
  }
  const handleClickError = ()=>{
    console.log("alert")
    }

    // copy text
    const handleCopyText = ()=>{
      copy(text)
      copyPassword()
    }
  return (
    <>
    <div className='ImgtoText'>
    <motion.div className='ImgtoText p-5 text-center'
    initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 0.5 }}
        >
    <h1 className='text-center p-5'>Image to Text Converter</h1>


    {/* Input */}
    {!isLoading && !text &&
        (
          <>
            <input className='text-field' onChange={(e)=>setImage(URL.createObjectURL(e.target.files[0]))} type="file" />
            {!image?
            <>
            <button  className='btn btn-primary'value="Convert" onClick={handleClickError} >Convert</button>
            </>
              :
              <button className='btn btn-primary'value="Convert" onClick={handleClick}>Convert</button>}
          </>
        )   
    }
    {!show && <button onClick={() => setShow(true)}>Show Alert</button>}


    {/*progress Bar  */}
    {isLoading  &&(
        <>
          <progress value={progress} max="100"></progress>
          <p className='text-center'>converting :{progress}%</p>
        </>
      )}


    {/* Output */}
    <div className='showextracted'>
    {!isLoading && text &&(
      <>
        <textarea className='form-control' rows="15" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
        <div className='d-flex justify-content-between'>
        <button className='backbutton' onClick={handleBack}>go Back</button>
        <button className='backbutton' onClick={handleCopyText}>Copy</button>
        </div>
        
      </>
      )}
      </div>
      </motion.div>
      <ToastContainer />
      </div>
   </>
  )
}

export default ImgToText
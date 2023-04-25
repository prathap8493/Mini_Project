import React,{useState} from 'react';
import axios from 'axios';
import './urlshortner.css';
import urlshortner from './urlshortener.jpg';
import copy from "copy-to-clipboard";
import  {UrlShortnerBarcode} from './UrlShortnerBarcode';
import { Checkmark } from 'react-checkmark';
import { motion } from "framer-motion";



const UrlShortner = () => {
    const [userInput, setUserInput] = useState("");
    const [shortenedLink, setShortenedLink] = useState("")
    const [error, setError] = useState("")
    const fetchData = async () => {
        try {
          const response = await axios( `https://api.shrtco.de/v2/shorten?url=${userInput}`);
          setShortenedLink(response.data.result.full_short_link);
        } catch (e) {
          console.log(e);
            setError(e.message);
        }
    }
    const handleCopyPassword = ()=>{
        copy(shortenedLink)
        setShortenedLink("")
    }
  return (
   <>
    <motion.div 
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.5 }}
    className='row urlShortner p-5'>
        <h1 className='text-center text-white urlShortnerHeading'>URL Shortener</h1>
            <div className='col-md-1'></div>
            <div className='col-md-5'>
                <input value={userInput} className='urlShortnerInput' placeholder='Paste the Url' onChange={(e)=>setUserInput(e.target.value)}/>
                <span><button className=" btn btn-info urlShortnerInputButton" onClick={() => {
                    fetchData()
                    setUserInput("")
                    }}>Shorten Url</button> </span>
                {
                    shortenedLink.length>0 ?
                    <>
                    <input className='urlShortnerInput mt-5' value={shortenedLink}/>
                    <span className='urlShortnerInputButton btn btn-warning ' onClick={handleCopyPassword}>Copy</span>
                    <div className='text-center  mt-5'> <UrlShortnerBarcode   UrlData={shortenedLink}  />
                     {/* share but */}
                    </div>                     
                    </>
                    : error.length > 0 && 
                    <>
                    <div>
                        <h3 className='urlShortnerPara mt-5'>An error occurred to generate the URLThe URL is not valid.</h3>
                        <h5 className='urlShortnerPara possibleError'>Possible Errors : </h5>
                        <p className='urlShortnerPara'> <Checkmark size='26px' />Check if the domain is correct</p>   
                        <p className='urlShortnerPara'> <Checkmark size='26px' />Check if the site is online</p> 
                        <p className='urlShortnerPara'> <Checkmark size='26px' />Check the length of the url is not too small</p> 
                        <p className='urlShortnerPara'> <Checkmark size='26px' />Check the address bars and punctuation</p>
                        <p className='urlShortnerPara'> <Checkmark size='26px' />The URL may have been blocked</p>
                        <p className='urlShortnerPara'> <Checkmark size='26px' />The url may have been reported</p>
                        <p className='urlShortnerPara'> <Checkmark size='26px' />Make sure the url does not contain spam</p>
                    </div>
                    <span className='urlShortnerInputButton btn btn-danger '>Enter valid URL</span>
                    </>
                }
            </div>
            <div className='col-md-6'>
                <img src={urlshortner} width="500px" className='urlshortnerimage mt-5'/>
            </div>
    </motion.div>
   </> 
  )
}

export default UrlShortner



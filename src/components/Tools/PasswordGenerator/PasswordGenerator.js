import React, { useState } from 'react'
import './passwordGenerator.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import copy from "copy-to-clipboard";
import passwordhome from './passwordhome.svg';
import {Barcode}  from './Barcode';
import {motion} from 'framer-motion';

const PasswordGenerator = () => {
  const generatedNotify = () => toast.success("Generated Password");
  const copyPassword = () => toast.warn("Copied to Clipboard")
    const [password, setPassword] = useState("")
  const [passwordLength, setPasswordLength] = useState(15)
  const [upperCase, setupperCase] = useState(false)
  const [lowerCase, setlowerCase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [symbols, setsymbols] = useState(false)
  const numbers = "0123456789";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";
  const handleGeneratePassword = () => {
    if (!upperCase && !lowerCase && !includeNumbers && !symbols) {
    }
    else {
      let characterList = ""
      if (includeNumbers) {
        characterList = characterList + numbers
      }
      if (upperCase) {
        characterList = characterList + upperCaseLetters
      }
      if (lowerCase) {
        characterList = characterList + lowerCaseLetters
      }
      if (symbols) {
        characterList = characterList + specialCharacters
      }
      setPassword(createPassword(characterList))
      generatedNotify()
    }
  }

  const createPassword = (characterList) => {
    let password = ""
    const characterListLength = characterList.length
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }
  const handleCopyPassword = (e) => {
    if (password === "") {
      
    }
    else {
      copy(password)
      copyPassword()
    }
  }
  return (
    <>

      <motion.div 
      initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: "-100%" }}   
        transition={{ duration: 0.5 }}   
      className='passwordmain'>
      
          <div class="container ">
              <div class="row passwordrow">
              <h1 className='passwordheading'>Random Password Generator</h1>
      <p className='passwordheading'>Create strong and secure passwords to keep your account safe online</p>
                <div class="col-md-1"></div>
                <div class="col-md-4"><img src={passwordhome}/>
                </div>
                <div className='col-md-1'></div>
                <div class="col-md-6 ">
                      <div className='row'>
                          <div className='col-md-10 generatedPassword d-flex justify-content-around'>
                              <input className='generatedPasswordInput'  value={password}/>
                              <span className='generatedPasswordInputspan btn btn-primary'>{passwordLength<10?"Weak":passwordLength>10&&passwordLength<35?"Good":"Very Secure"}</span>
                          </div>
                          <div className='col-md-2'>
                          <button className='btn btn-primary mt-2 ' onClick={handleCopyPassword}>Copy</button>
                        </div>
                      </div>
                      <div className='row mt-4'>
                          <div className='col-md-5'>
                            <h5 className='passwordLength'>Password length :       {passwordLength} </h5>
                          </div>
                          <div className='col-md-7'>
                            <input type="range" value={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} />
                          </div>
                      </div>
                      <div className='row mt-5'>
                            <div className='col-md-4'>
                              <h5 className='passwordLength'>Characters used:</h5>
                            </div>
                            <div className='col-md-8'>
                                  <div style={{display:"inline-block",marginRight:"20px"}}>
                                    <input className='custom-control-input'  checked={upperCase} onChange={(e) => setupperCase(e.target.checked)} type="checkbox" id="uppercase-letters" name="uppercase-letters" />
                                  <h5 style={{display:"inline-block",marginRight:"20px"}} htmlFor="passwordLength">ABC</h5>
                                  </div>
                                  <div style={{display:"inline-block",marginRight:"20px"}}>
                                    <input className='custom-control-input' checked={lowerCase} onChange={(e) => setlowerCase(e.target.checked)} type="checkbox" id="lowercase-letters" name="lowercase-letters" />
                                  <h5 style={{display:"inline-block",marginRight:"20px"}} htmlFor="passwordLength">abc</h5>
                                  </div>
                                  <div style={{display:"inline-block",marginRight:"20px"}}>
                                    <input className='custom-control-input'  checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} type="checkbox" id="include-numbers" name="include-numbers"/>
                                  <h5 style={{display:"inline-block",marginRight:"20px"}} htmlFor="passwordLength">123</h5>
                                  </div>
                                  <div style={{display:"inline-block",marginRight:"20px"}}>
                                    <input className='custom-control-input' checked={symbols} onChange={(e) => setsymbols(e.target.checked)} type="checkbox" id="include-symbols" name="include-symbols" />
                                  <h5 style={{display:"inline-block",marginRight:"20px"}} htmlFor="passwordLength">#$&</h5>
                                  </div>
                            </div>
                      </div>
                      <button onClick={handleGeneratePassword} className="btn btn-primary">Generate Password</button>
                      {
                        password.length>0 &&
                      <div className='text-center'> <Barcode   qrData={password}  /></div>
                      }
                      <ToastContainer />
                </div>
              </div>
          </div>
          </motion.div>
    </>
  )
}

export default PasswordGenerator

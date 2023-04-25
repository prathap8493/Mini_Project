import React from 'react';
import 'suneditor/dist/css/suneditor.min.css'
import SunEditor from 'suneditor-react';
import './texteditor.css';
import {motion} from 'framer-motion';

const TextEditor = () => {
  const handleChange = ()=>{
    console.log()
  }
  return (
    <>
      <motion.div 
      initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.5 }}
      className='texteditormain'>
      <h1 className='text-center p-3'>Text-Editor</h1>
        <SunEditor 
          autoFocus={true}
          placeholder="Enter something ...."
          height='430px'
        onChange={handleChange}
        setDefaultStyle="font-family:Roboto Mono;font-size:30px;"
        setOptions={{
          buttonList: [
        ['undo', 'redo'],
        ['font', 'fontSize', 'formatBlock'],
        ['paragraphStyle', 'blockquote'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['fontColor', 'hiliteColor', 'textStyle'],
        ['removeFormat'],
        '/', 
        ['outdent', 'indent'],
        ['align', 'horizontalRule', 'list', 'lineHeight'],
        ['table', 'link', 'image', 'video', 'audio' /** ,'math' */],
        ['fullScreen', 'showBlocks', 'codeView'],
        ['preview', 'print'],
        ['save', ],
    ]
        }}
        />
        </motion.div>
    </>
  )
}

export default TextEditor
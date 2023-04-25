import React,{useState} from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { useSpeechRecognition } from 'react-speech-kit';
import { motion } from 'framer-motion';
import './TexttoSpeech.css'
const TexttoSpeech = () => {
    const { speak } = useSpeechSynthesis();
    const [value, setValue] = useState('');
    const [text, setText] = useState('');
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result) => {
          setText(result);
        },
      });
    const handleSpeech = () => {
        listen()
    }
    const handleSpeechstop = () => {
        stop()
        setText("")
    }
  return (
    <> 
 {/*Text to speech converter  */}
    <motion.div className='TextToSpeechMain'
    initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.5 }}
        >
            <div className='row'>
                <div className='col-md-6 m-5'>
                    <h1>TexttoSpeech Converter</h1>
                    <textarea
                        rows="15"
                        className='form-control textareaspeech' 
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                                    />
                                    <div className='text-center d-flex justify-content-around mt-3'>
                        <button className='btn btn-primary' onClick={() => speak({ text: value })}>Speak</button>
                        <button className='btn btn-danger' onClick={() => setValue("")}>clear</button>
                      </div>
                </div>
{/* Speech to text */}
                <div className='col-md-6 m-5 '>
                <h1>Speech to Text Converter</h1>
                    <div>
                        <textarea
                        rows="15"
                        className='form-control textareaspeech'
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        />
                        <div className='d-flex text-center justify-content-around mt-3'>
                        <button  onClick={handleSpeech} onMouseUp={stop} className='btn btn-primary'>Listen</button>
                        <button  onClick={handleSpeechstop}  className='btn btn-danger'>Stop</button>
                        {listening && <div>Go ahead I'm listening</div>}
                        </div>
                    </div>
                </div>
        </div>
    </motion.div>
    </>
  )
}

export default TexttoSpeech
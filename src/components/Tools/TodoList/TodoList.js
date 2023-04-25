import React,{useState,useEffect} from 'react'
import notes from './notes.svg';
import nothing from './nothing.svg'
import { AiFillFileAdd } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import {motion} from 'framer-motion';
import './todolist.css';


// getting data from the local storage
const getLocalItems = ()=>{
    let list = localStorage.getItem("ToDOList");
    console.log(list)
    if(list){
    return  JSON.parse(localStorage.getItem("ToDOList"));
    }else{
        return []
    }
}

const TodoList = () => {
    const [todos, setTodos] = useState(getLocalItems())
    const [text, setText] = useState('')
    const [description,SetDescription]= useState("")
    const [showTitle,setShowTitle] = useState(false);
   
    // add item
    const addItem = () => {
        if(text !== ''){
            const allInputData = { id:new Date().getTime().toString(),name:text,description:description,date:new Date().toLocaleString()}
            setTodos([...todos, allInputData]);
            setText('');
            SetDescription('');
        }
    }
    console.log(todos)
// delete item
    const deleteItem = (index)=>{
        setTodos(todos.filter((item)=>index!==item.id));
    }
// remove all item
    const removeAllItem = ()=>{
        setTodos([]);
    }
    // edit item
    const editItem = (index)=>{
        let newEdited = todos.find((item)=>{
            return item.id === index
        }) 
        console.log(newEdited)
    }
    // local Storage
    useEffect(()=>{
        localStorage.setItem("ToDOList",JSON.stringify(todos))
    },[todos])
    return (
    <>
        <motion.div 
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.5 }} 
        className='todomain'>
        {/* left side */}
                <div className='left-side'>
                <div className=''>
                <h1>
                The best way to organize your life
                </h1>
                <h4>Organize your tasks, lists </h4>
                </div>
                    <img src={notes} className='notesimg'/>
                    <p>Daily planner is the secret weapon of successful people</p>
                </div>
        {/* right side */}
                <div className=''>
                <div className='m-3'>
                { showTitle && <input  className='todoinput todoinputTitle ' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Title' />}
                    <input  className='todoinput' value={description} onClick={()=>setShowTitle(true)} onChange={(e)=>SetDescription(e.target.value)} placeholder='Take a note...' />
                    <span><AiFillFileAdd style={{fontSize:"48px",color:"#6C63FF"}} onClick={addItem}/></span>
                  {
                    todos.length>0 &&
                    <button className='btn btn-primary' onClick={removeAllItem}>Remove All</button>
                  }
                </div>
                <div className='showList'>

                </div>
                {
                    todos.length>0? 
                    <div className='todoitem'>
                                    {
                                        todos.map((item)=>{
                                            return (
                                                <>
                                                <motion.div animate={{x:0}} initial={{x:-200}}   className=' notes-item' key={item.id}>
                                                    <span>Created At : {item.date}</span>
                                                    <div class="badge " ><MdDelete style={{fontSize:"20px",color:"red"}}  onClick={()=>deleteItem(item.id)}/></div>
                                                        <h3 className='todoinputTitle'>Title : {item.name} </h3>
                                                        <p>{item.description}</p>
                                                </motion.div>
                                                </>
                                            )})
                                    }
                    </div>
                    :
                    <>
                    <div className='text-center m-5'>
                    <h3>Nothing to show.Add Something...</h3>
                    <img src={nothing} className='w-25'/>
                    </div>
                    </>
                }
                </div>
        </motion.div>
    </>
  )
}

export default TodoList
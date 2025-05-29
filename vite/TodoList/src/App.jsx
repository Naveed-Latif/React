import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoIosSave } from "react-icons/io";



function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  // useEffect to get todos from local storage
  useEffect(() => {
    let lsTodos = localStorage.getItem("todos");
    // if local storage has todos then set todos state
    // else set todos state to empty array
    if (lsTodos) {
      setTodos(JSON.parse(lsTodos));
    }


  }, [])

  // save to local storage function
  const saveToLs = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  // handle change function
  const hadleChange = (e) => {
    setTodo(e.target.value)
  }
  // handle add function
  const handleAdd = () => {
    if (todo.trim() === "") {
      alert("Please enter a todo");
      return;
    }
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLs();
  }
  // handle checkbox function
  const handleCheckbox = (e) => {
    let id = e.target.id;
    console.log(id)
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLs();
  }
  // handle keyup function
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
      setTodo("");
    }
  }
  // handle edit function
  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    })
    setTodos(newTodos);
    saveToLs();
  }
  // handle delete function
  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    })
    setTodos(newTodos);
    saveToLs();
  }
  

  return (
    <>
      <Navbar />
      <div className="md:container flex justify-center items-center my-5 md:mx-auto ">
        <div className='bg-blue-400 md:w-3/5 min-h-[70vh] text-center rounded-xl w-full'>
          <h1 className='my-5 font-bold text-2xl'>Your Todos</h1>
          <span><input onChange={hadleChange} onKeyUp={handleKey} value={todo} type="text" className='bg-amber-50 rounded-sm w-3/4' />
            <button onClick={handleAdd} type='submit' className='mx-5 p-3 px-3  text-sm bg-[#023e8a] rounded-xl text-amber-50 hover:bg-blue-950 hover:cursor-pointer'><IoIosSave /></button></span>
          <h1 className='text-2xl font-bold' >Your Todo's</h1>
          {/* Will dispaly "NoTOdos" if There's no Task Added */}
          {todos.length === 0 && <h1 className='text-amber-50 text-xl font-bold'>No Todos</h1>}
          {/* Map through todos and display them */}
          {todos.map((item) => {

            return <div key={item.id} className='todos flex my-3 w-3/4 justify-between'>
              <div className='flex items-center wrap-break-word'>
                <input id={item.id} onChange={handleCheckbox} type="checkbox" className='mx-2' />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="button flex h-full items-center">
                <button onClick={(e) => { handleEdit(e, item.id) }} className='mx-2 p-1 px-2 text-sm bg-[#023e8a] rounded-md text-amber-50 hover:bg-blue-950 hover:cursor-pointer'><CiEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='mx-2 p-1 px-2 text-sm bg-[#023e8a] rounded-md text-amber-50 hover:bg-blue-950 hover:cursor-pointer'><MdDelete /></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App


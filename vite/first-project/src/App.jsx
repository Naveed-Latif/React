import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({email:'',phone:''})

  const handlechange=(e)=>{
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form); 
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
        <input type="text" name='email' value={form.email}  onChange={handlechange}/>
        <input type="text" name='phone' value={form.phone} onChange={handlechange}/>
        </div>
      </div>
     
    </>
  )
}

export default App

import { use, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([])
  

  const fetchData = async () => {
    let a = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await a.json();
    setCount(data);
    console.log(data);
  }
  useEffect(() => {
    fetchData();
  },[])
  

  return (
    <>
      <div className='container'>
        {count.map(item => {
          return <div key={item.id} className='card text-center'>
            <div className='title  border-2 border-amber-200 '>{item.title}</div>
            <div className='body'>{item.body}</div>
          </div>
        })}
      </div>
    </>
  )
}

export default App

import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength]=useState(8)
  const [Numberallowed, setNumber]=useState(false)
  const [Charallowed, setChar]=useState(false)
  const [password, setPassword]=useState("")
  const passwordgenerator=useCallback(()=>{
    let pass=""
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (Numberallowed) string+="123456789"
    if (Charallowed) string+="! @#$%^&*()_+-={}[]|\:";
    for (let i=1; i<=array.length; i++)
    {
      let char=Math.floor(Math.random()*string.length+1)
      pass=string.charAt(char)
    }
    setPassword(pass)
  }, [length, Numberallowed, Charallowed, ])

  return (
    <>
    <div className='h-screen flex justify-center'>
      <h1>Password Generator</h1>
    </div>
    </>
  )
}

export default App

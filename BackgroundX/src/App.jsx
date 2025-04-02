import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setColor] = useState('gray')

  return (
    <>
      <div className='w-screen h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-1'>
          <div className=' flex flex-wrap justify-center px-3 py-3 bg-white text-black'> 
            <button onClick={() => setColor("red")} className='  mx-3  shadow-lg rounded-3xl outline-none' style={{backgroundColor:"red"}}>Red</button>
            <button onClick={() => setColor("green")} className=' mx-3  shadow-lg rounded-3xl outline-none' style={{backgroundColor:"green"}}>Green</button>
            <button onClick={() => setColor("blue")} className=' mx-3  shadow-lg rounded-3xl outline-none' style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={() => setColor("pink")} className=' mx-3  shadow-lg rounded-3xl outline-none' style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={() => setColor("white")} className=' mx-3  shadow-lg rounded-3xl outline-none text-black' style={{backgroundColor:"white"}}>White</button>
            <button onClick={() => setColor("black")} className=' mx-3  shadow-lg rounded-3xl outline-none text-white' style={{backgroundColor:"black"}}>Black</button>
            <button onClick={() => setColor("orange")} className=' mx-3  shadow-lg rounded-3xl outline-none' style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={() => setColor("violet")} className=' mx-3  shadow-lg rounded-3xl outline-none' style={{backgroundColor:"violet"}}>Violet</button>
            <button onClick={() => setColor("gray")} className=' mx-3  shadow-lg rounded-3xl outline-none' style={{backgroundColor:"gray"}}>gray</button>
            <button onClick={() => setColor("brown")} className=' mx-3  shadow-lg rounded-3xl outline-none' style={{backgroundColor:"brown"}}>nrown</button>
            </div>
            </div>
          </div>
        
      
    </>
  )
}

export default App

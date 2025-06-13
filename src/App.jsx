import React, { useState , useCallback} from 'react'
import './App.css'
const App = () => {
  const [length,setLength]=useState(0)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("")
  const passwoedGenerator = useCallback(()=>{
    let pass ="";
    let str="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#%^$^&*()_{}~`"
    for(len i=0;i<array.length;i++){
      
    }
  },[length,numberAllowed,charAllowed,setPassword])
  return (
    <>
    <h1 className='text-4xl text-center text-white'>
      Password generator
    </h1>
    </>
  )
}

export default App
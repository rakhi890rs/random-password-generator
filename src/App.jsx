import React, { useState, useEffect, useRef } from 'react'

const App = () => {
  const [length, setLength] = useState(10)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  useEffect(() => {
    let pass = "";
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#%^$^&*()_{}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPassword = () => {
    if (passwordRef.current) {
      passwordRef.current.select();
      navigator.clipboard.writeText(password);
      alert("Password copied!");
    }
  }

  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center bg-black'>
        <div className='w-full max-w-md shadow-md rounded-lg px-4 py-3 text-orange-500 bg-gray-800'>
          <h1 className='text-white text-center text-4xl'>Password Generator</h1>

          <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-3'> 
            <input 
              type="text"
              value={password}
              ref={passwordRef}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
            />
            <button  
              onClick={copyPassword}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
              Copy
            </button>
          </div>

          <div className='flex text-sm gap-x-4 items-center mb-4'>
            <input
              type="range" 
              min={6}
              max={100}
              className='cursor-pointer'
              value={length}
              onChange={(e)=> {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>

            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => { setNumberAllowed((prev) => !prev) }}
            />
            <label htmlFor="numberInput">Numbers</label>

            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => { setCharAllowed((prev) => !prev) }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

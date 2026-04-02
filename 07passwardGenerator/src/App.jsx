import "./index.css";
import { useState, useCallback,useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "0123456789"
    if (charallowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberallowed, charallowed, setPassword])

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 20);
  window.navigator.clipboard.writeText(password)
},
[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberallowed, charallowed, passwordGenerator])
  return (
    <>
      <div
        className="w-full max-w-md mx-auto 
       shadow-lg rounded-lg  my-8 bg-gray-800 text-orange-500 p-5" 
      >
        <span className="text-4xl font-bold text-center text-green-700 hover:text-green-900 ">
         <i>Password Generator </i> 
        </span>
        <div className="flex  shadow rounded-lg bg-white mb-4">

          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="  outline-none w-full py-1 px-3 placeholder:text-gray-500 
          border border-gray-600 
           focus:ring-blue-500"
            placeholder=" Password"
          />
          <button 
          onClick={copyPasswordToClipboard}
          className="bg-blue-700 outline-none
           text-white px-3 py-0.5 hover:bg-green-600 rounded-xl shrink-0"
           >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1" >
            <input type="range"
              min={4}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length : {length}</label>
          </div>
          <div>
             <input
            type="checkbox"
            defaultChecked={numberallowed}
            id="numberinput"
            onChange={(e) => setNumberallowed((prev) => !prev)}
          />
          <label htmlFor="numberinput"> Numbers</label>

          
          </div>
            
             <input
            type="checkbox"
            defaultChecked={charallowed}
            id="characterinput"
            onChange={(e) => setCharallowed((prev) => !prev)}
          />
          <label htmlFor="characterinput"> Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;

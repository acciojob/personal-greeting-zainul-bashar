
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  
  const[name,setName] = useState('');

  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
        {
          name && 
          <p>Hello {name}</p>
        }
    </div>
  )
}

export default App

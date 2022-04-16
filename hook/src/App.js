import {useState} from 'react'
import Content from './content';
import './App.css';


function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{padding: '32px'}}>
    <button onClick={()=>setShow(!show)}>Toggle</button>
    {show&&<Content/>}
    </div>
  );
}

export default App;

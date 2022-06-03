import {useState} from 'react'
import Content from './content';
import Sang from './contentTest';
import Layout from './useLayoutEffect-hook-test';
import './App.css';


function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{padding: '32px'}}>
    <button onClick={()=>setShow(!show)}>Toggle</button>
    {show&&<Layout/>}
    </div>
  );
}

export default App;

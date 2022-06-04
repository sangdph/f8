import {useEffect, useRef, useState} from 'react'
import './App.css';


function App() {
  const [count, setCount] = useState(60);

  const timerId = useRef();
  const sangPreCount = useRef();
  const h1ref = useRef();

  
  useEffect(()=>{
    const rest = h1ref.current.getBoundingClientRect();

    console.log(rest);
  })
  useEffect(()=>{
    sangPreCount.current = count;
  }, [count])

  const handleStart = ()=>{
    timerId.current= setInterval(()=>{
      setCount(prevCount =>prevCount -1);
    }, 1000);
    console.log("start: ", timerId.current);
  }

  const handleStop = ()=>{
    clearInterval(timerId.current);
    console.log("stop: ", timerId.current);
  }

  console.log(count, sangPreCount.current);

  return (
    <div style={{padding: '60px'}}>
      <h1 ref={h1ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;

import {useState} from 'react'
import './App.css';

const order = [100,200,300];
function App() {
  const [Counter, setCounter] = useState(()=>{
    const total = order.reduce((sang,nhi)=>nhi+sang)
    console.log('sang');
    return total;
  });

  const [Info, setInfo] = useState({
    sang: "Đặng Phan Hoàng Sang",
    nhi: "Nguyễn Ngọc Xuân Nhi"
  })

  const handleInfo = () =>{
    setInfo({...Info,iu: "yêu"});
  }

  const handleCounter = () =>{
    setCounter(prevState => prevState + 1);
  }
  return (
    <div className="App">
      <h1>{Info.nhi} {Info.iu} {Info.sang}</h1>
      {console.log(Info)}
      <button onClick={handleInfo}> Increase</button>
    </div>
  );
}

export default App;

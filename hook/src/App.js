import {useState} from 'react'
import './App.css';

const gifts = ['Xuân Nhi hôn Sang', 'Sang hôn Xuân Nhi', 'Xuân Nhi ôm Sang', 'Sang ôm Xuân Nhi ngủ'];
console.log(gifts[1]);
function App() {
  
  return (
    <div className="App">
      <h1>{Info.nhi} {Info.iu} {Info.sang}</h1>
      {console.log(Info)}
      <button onClick={handleInfo}> Increase</button>
    </div>
  );
}

export default App;

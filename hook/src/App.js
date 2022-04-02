import {useState} from 'react'
import './App.css';

const datas= [
  {
    id: 1,
    name: 'Xuân Nhi'
  },
  {
    id: 2,
    name: 'Bé Sang'
  },
  {
    id: 3,
    name: 'Chị Xuân Nhi yêu Bé Sang'
  }
];
function App() {
  const [checked, setChecked] = useState([]);
  console.log(checked)
  const handleSubmit = () =>{
    console.log({ids: checked});
  }
  const handleCheck = (id) =>{
    setChecked(prevState =>{
      const isChecked = checked.includes(id);
      if(isChecked){
        return checked.filter(item => item !== id)
      }else{
        return [...prevState, id];
      }
    });
  }
  return (
    <div style={{padding: '32px'}}>
      {datas.map(data=>(
        <div key={data.id}>
          <input 
            type='checkbox' 
            checked={checked.includes(data.id)}
            onChange={()=>handleCheck(data.id)}
          />
          {data.name}
        </div>
      ))}
      
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;

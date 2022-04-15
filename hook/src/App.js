import {useState} from 'react'
import Content from './content';
import './App.css';


function App() {
  const [name, setName] = useState('')
  const [items, setItems] = useState([]);

  const Add = (name)=>{
    setItems(prevState=>[...prevState, {name: name, done: true}]);
    setName('');
  }

  const Delete = (value) =>{
    setItems(items.filter(item => item.name!==value))
  }

  const [show, setShow] = useState(false);
  return (
    <div style={{padding: '32px'}}>
  
    <input 
      value={name}
      onChange={e=>setName(e.target.value)}
    />
    <button onClick={()=>Add(name)}>Add</button>
    <div>
      {items.map((item,index)=>{
        return  <div key={index} style={{marginTop: '5px'}}>
                {item.name}<button onClick={()=>Delete(item.name)}>xóa</button>
                <button >Hoàn thành 2</button>
                </div>
      })}
    </div>
    <button onClick={()=>setShow(!show)}>Toggle</button>
    {show&&<Content/>}
    </div>
  );
}

export default App;

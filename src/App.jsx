import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState(['Vamshi', "Nikhil"]);
  const [inpuValue, setInputValue] = useState('');
  // adding the item to array or items arrey
  function addItem() {
    if(inpuValue=='') return ;
    setItems((prev)=>[...prev, inpuValue]);
    setInputValue('')
  }
    // removig the item to array or items arrey
   function remove(id) {
    let newItems = [...items];
    newItems.splice(id, 1);
    setItems(newItems);
  }
  return(
    <>
     <div>
       <h1>Adding & Removing the Items</h1>
     </div>
     <div className='adding-items'>
          <input onInput={(e)=> setInputValue(e.target.value)} value={inpuValue} type="text" placeholder='Add your name to our family' />
          <input className="add-btn" type="button" value="Add" onClick={addItem}/>
          <h5>{inpuValue}</h5>
     </div>

     <div className='display-items'>
        <ul>
          {items.map((item,index)=> (
            <li key={index} id={index}>{index+1}. {item} <button onClick={()=> remove(index)} id={index}>X</button></li>
          ))}
        </ul>
     </div>
    </>
  )
}

export default App

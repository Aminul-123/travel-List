
import Logo from './assets/Logo';
import Form from './assets/Form';
import PackingList from './assets/PackingList';
import Stats from './assets/Stats';
import { useState } from 'react';
import './App.css'

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];
 
export const  App = () => {
  const [items, setItems] = useState([]);
  //const [showList, setShowList]  = useState(true)

  function handleList () {
const confirmed = window.confirm('Are you sure you want to delete all items?')

if (confirmed)  setItems([]);
  }
  
  function handleAddItem  (item) {
    setItems((items) => [...items, item]);
}

function handleDeleteItem (id) {
  //console.log(id);
  setItems((items) => items.filter((item) => item.id !== id));
}

function handleToggleItem (id) {
  setItems((items) => 
    items.map((item)  => 
      item.id === id ? {...item, packed : !item.packed} 
      :item)
  )
}
  
  return (
   <>
   <Logo/>
   <Form onAddItems = {handleAddItem} />
   <PackingList items = {items} onDeleteItem= {handleDeleteItem}
    onToggleItems ={handleToggleItem} 
    onHandleList={handleList}
   />
   <Stats items = {items} />
   </>
  )
}


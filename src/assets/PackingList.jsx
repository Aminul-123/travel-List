  import Item from "./Item";
  import { useState } from "react";
 export default function PackingList ({items, onDeleteItem, onToggleItems, onHandleList}) {
    const [sortBy, setSortBy] = useState('packed')
    
  
    let sortedItems ;
    if (sortBy === 'input') sortedItems = items
    if(sortBy === 'description') {
      sortedItems =items.slice().sort((a, b) => a.description.localeCompare(b.description))
    }
    if (sortBy === 'packed') {
      sortedItems = items.slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
    }
   
    return (
      <>
      
    <div className="list">
    <ul>
  {
    sortedItems.map((item) => (
      <Item item = {item} key={item.id} onDeleteItem={onDeleteItem} 
      onToggleItems={onToggleItems}
      />
    ))
  }
  </ul>
  <div className="actions">
  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} >
    <option value="input">Sort by Input order</option>
    <option value="description">Sort by description</option>
    <option value="packed">Sort by packed status</option>
  </select>
  <button onClick={onHandleList}>Clear list</button>
  </div>
  </div>
  
      
      </>
      
    )
  }

 export default function Item ({item, onDeleteItem, onToggleItems}) {
    return (
      <>
      <li>
        {/* here is next, we will implement control element???  */}
        <input type="checkbox"  value={item.packed}
        onChange={() => onToggleItems(item.id)}
        />
        <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
        {item.quantity} {item.description} 
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
       </li>
      </>
    )
  }
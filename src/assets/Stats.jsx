
 export default function Stats ({items}) {

    if(!items.length) return (
  
      <p className='stats'>
          <em>start Adding some items to your packing list</em>
      </p>
    )
  
    const numItem = items.length;
    //console.log(numItem);
    const numPacked = items.filter((item) => item.packed).length
    const percentage = Math.round(( numPacked / numItem )* 100)
    return (
      <>
      <footer className='stats'>
        <em>
          {percentage === 100 ? <>
            You got everything ! Ready to go ✈✈
          </>  : <>
          You have {numItem} items on your list , and you already 
          packed {numPacked} ({percentage}%)
          </>}
        </em>
       
      </footer>
      </>
    )
  }
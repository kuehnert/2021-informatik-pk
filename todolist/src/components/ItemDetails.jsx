import React from 'react';

function ItemDetails(props) {
  const item = props.item;
  console.log('ItemDetails item: ', item);

  return (
    <div className='ItemDetails'>
      <h2>
        Item Details {item.id} {item.title}
      </h2>
      <form>
        <input id='title' value={item.title} />
        <button type="submit" >Speichern</button>
      </form>
    </div>
  );
}

export default ItemDetails;

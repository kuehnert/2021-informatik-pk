import React, { useState } from 'react';

function ItemDetails(props) {
  const item = props.item;
  const [title, setTitle] = useState(item.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleEdit(item.id, title);
  }

  return (
    <div className='ItemDetails'>
      <h2>
        Item Details {item.id} {item.title}
      </h2>

      <form onSubmit={handleSubmit}>
        <input id='title' value={title} onChange={handleChange} />
        <button type="submit">Speichern</button>
      </form>
    </div>
  );
}

export default ItemDetails;

import { useState } from 'react';

function Rechnen() {
  const [x, setX] = useState(1);
  let y = 2;
  const handleChangeX = event => {
    const temp = event.target.value;
    setX(temp);
  };

  const handleClick = () => {};

  return (
    <div className='card'>
      <div class='content'>
        <div class='header'>Elliot Fu</div>
        <div class='description'>
          <span>1. Zahl:</span>
          <div className='ui input'>
            <input value={x} onChange={handleChangeX} />
          </div>

          <span>2. Zahl:</span>
          <div className='ui input'>
            <input value={y} onChange={handleChangeX} />
          </div>

          <button className='ui blue basic button' onClick={handleClick}>
            Addiere
          </button>

          <div className='ui message'>
            <div className='header'>Summe</div>
            <p>{+x + +y}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rechnen;

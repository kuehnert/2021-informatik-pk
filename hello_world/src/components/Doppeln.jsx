import { useEffect, useState } from 'react';

function Doppeln() {
  const [zeichen, setZeichen] = useState('');
  const [ergebnis, setErgebnis] = useState('');

    // wird beim Start 1x aufgerufen
    useEffect(() => {
        const newZeichen = localStorage.getItem("zeichen");
        setZeichen(newZeichen);
    }, [])

  const handleChange = event => {
    setZeichen(event.target.value);
  };

  const handleClick = () => {
    localStorage.setItem('zeichen', zeichen);
    setErgebnis(zeichen + zeichen);
  };

  return (
    <div className='card'>
      <div className='ui input'>
        <input value={zeichen} onChange={handleChange} />
      </div>

      <button className='ui blue basic button active' onClick={handleClick}>
        Verdopple
      </button>

      <div style={{ backgroundColor: zeichen }}>{ergebnis}</div>
    </div>
  );
}

export default Doppeln;

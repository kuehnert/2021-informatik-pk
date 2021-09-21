import { useState } from "react";

function Rechnen() {
    const [x, setX] = useState(1);
    let y = 2;
    const handleChangeX = (event) => {
        const temp = event.target.value;
        setX(temp);
    }

    const handleClick = () => {
        
    }

    return (<>
        <span>1. Zahl:</span>
        <input value={x} onChange={handleChangeX} />
        <span>2. Zahl:</span>
        <input value={y} onChange={handleChangeX} />
        <div>Summe: {+x + +y}</div>
        <button
            className="ui blue basic button"
            onClick={handleClick}>
            Addiere
        </button></>)
}

export default Rechnen;

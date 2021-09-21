function Clonen() {
    const fragments = [];
    fragments.push(1);
    fragments.push(2);
    fragments.push(3);

    return (
        <div>
            {fragments.map(e => <div key={e}>{e}</div>)}
        </div>
    )
}

export default Clonen;

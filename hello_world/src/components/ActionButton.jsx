function ActionButton() {
    const handleClick = () => {
        console.log("handleClick");
        alert("Ich bin da!");
    }

    return (
        <button
            className="ui orange basic button"
            onClick={handleClick}>
            Bumm!
        </button>)
}

// erlaubt <ActionButton />
export default ActionButton;

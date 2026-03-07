function ClickHandler(){
    const handle=()=>{
        alert("He/She Clicked Me");
    }

    return (
    <div>
        <h1> button clicked</h1>
        <button onClick={handle}>Click Me</button>
    </div>
    )
};
export default ClickHandler
import { useState } from "react";
function SimpleForm()
{
    const [name,setName]=useState("");
    const handlesubmit=(e)=>{
        e.preventDefault();
        alert(`Submitted Name:${name}`);
    };
    return(
        <form onSubmit={handlesubmit}>
            <input type="text" value={name} onChange={(e=>setName(e.target.value))}/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default SimpleForm;
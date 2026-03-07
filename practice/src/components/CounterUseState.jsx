import { useState } from "react";
function Cus()
{
    const [count,setcount]=useState(0);
    return(
        <>
        <p>{count}</p>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        </>
    );

}
export default Cus;
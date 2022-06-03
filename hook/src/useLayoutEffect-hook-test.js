import { useState, useLayoutEffect, useEffect } from "react";

function LayoutEffect(){
    const [count, setcount] = useState(0);
    
    useLayoutEffect(()=>{
        if(count >9){
            setcount(0);
        }
    },[count]);
    const dem = ()=>{
        setcount(count +1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={dem}>Dem</button>
        </div>
    );
}

export default LayoutEffect;
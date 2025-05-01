import { useState } from "react";

function Counter(props){
    const[count,setcount] = useState(0);
    function count_plus(){
        setcount(count+1);
    }
    function count_minus(){
        if(count > 0){
        setcount(count-1);
       }
    }
    return(
        <div>
            <button onClick={count_plus}>더하기</button>
            <div style={count % 2 == 0 ? {color:"blue"} : {color:"red"}}>{count}</div>
            <button onClick={count_minus}>빼기</button>
        </div>
    );
}
export default Counter;
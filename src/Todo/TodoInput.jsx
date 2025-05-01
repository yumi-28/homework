import { useState } from "react";
import TodoItem from "./TodoItem";
function TodoInput(props){
    const[input,setinput] = useState('') //입력한 내용 저장

    function clickButton(){
        props.AddTodo(input);
        setinput('');
    }

    return(
        <div>
            <input 
            value={input} 
            type="text" 
            placeholder="할 일 입력"
            onChange={(e)=>setinput(e.target.value)}  //실시간으로 입력 한 내용이 나오게 함
            />
            <button onClick={clickButton}>입력</button>
        </div>
    );

}

export default TodoInput;
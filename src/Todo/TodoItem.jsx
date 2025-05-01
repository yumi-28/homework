import { useState } from "react";

function TodoItem({text,DelList,done,toggledone}){
    return(
        <div>
            <span style={{textDecoration : done ? "line-through" : "none"}}>{text}</span>
            <button onClick={toggledone}>완료</button>
            <button onClick={DelList}>삭제</button>    
        </div>
    );
}

export default TodoItem;
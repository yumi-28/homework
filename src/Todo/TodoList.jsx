import TodoItem from "./TodoItem";
function TodoList({todos,Deltodo,toggledone}){
    return(
        <div>
            {todos.map((todos,index)=>(
                <TodoItem text = {todos.text} done = {todos.done}
                toggledone={()=> toggledone(index)}
                DelList ={() => Deltodo(index)}/>
           ))}
        </div>
    );
}

export default TodoList;
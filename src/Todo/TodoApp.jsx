import {useState} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";

function TodoApp(props){
    const[todos,settodos] = useState([]);
    const[filterbu,setfilterbu] = useState("all");
    //필터의 기본 값을 all로 설정
    function AddTodo(newtodo){
        settodos(prevTodo=> [...prevTodo,{text  :newtodo, done : false}]); 
        //prevTodo를 settodo의 매개변수로 받아서 입력 전까지의 리스트 상태를 저장
        //처음 요소의 필터 상태를 false로 설정해 아직 완료가 안 된것으로 설정
    }

    function toggledone(index) {
        settodos(prev => 
            prev.map((todo, i) => 
                i == index ? { ...todo, done: !todo.done } : todo
            )
        );
    }

    function Deltodo(index){
        settodos(prevTodo => prevTodo.filter((_,i) => i != index));
        //filter는 조건에 맞는 것만 새로운 리스트에 반환하는 메소드
    }

    const filteredTodo = todos.filter((todo) =>
    {
        if(filterbu == "all") return true;
        if(filterbu == "uncomplete") return !todo.done;   //false
        if(filterbu == "complete") return todo.done;    //true
    })

    return(
        <div>
            <TodoInput AddTodo = {AddTodo}/>
            <TodoList todos = {filteredTodo} Deltodo = {Deltodo} toggledone={toggledone}/>
            <FilterButtons setfilterbu = {setfilterbu}/>
        </div>
    );
}
//다른 컴포넌트들을 부모 컴포넌트인 TodoApp에 배치

export default TodoApp;
function FilterButtons({setfilterbu}){
    return(
        <div>
            <button onClick={()=>setfilterbu("all")}>전체</button>
            <button onClick={()=>setfilterbu("uncomplete")}>미완료</button>
            <button onClick={()=> setfilterbu("complete")}>완료</button>
        </div>
    );
}


export default FilterButtons;
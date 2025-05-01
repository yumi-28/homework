function Resultscoretotal({score,total,retry}){
    return(
        <div>
            <h2>퀴즈 완료</h2>
            <p>당신의 점수는{score}/{total}입니다.</p>
            <button onClick={retry}>다시 풀기</button>
        </div>
    );
}

export default Resultscoretotal;
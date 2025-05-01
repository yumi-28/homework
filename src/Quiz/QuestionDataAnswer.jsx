function QuestionDataAnswer({currentQuestion,answer}){
    return(
        <div>
            <h2>
                {currentQuestion.question};
            </h2>
            {currentQuestion.option.map((option)=>(
                <button onClick={()=>answer(option)}>{option}</button>
            ))}
        </div>
    );
}

export default QuestionDataAnswer;
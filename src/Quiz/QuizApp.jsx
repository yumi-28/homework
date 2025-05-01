import React, { useEffect, useState } from "react";
import QuestionDataAnswer from './QuestionDataAnswer';
import Resultscoretotal from './Resultscoretotal';

function QuizApp(props){
    const[currentIndex,setcurrentIndex] = useState(0);
    const[score,setscore] = useState(0);
    const[isfinish,setisfinish] = useState(false);
    const[isanwer,setisanswer] = useState(false);

    const quesitons = [
        {question : "상명대학교가 처음 설립된 연도는?",option : ["1937년","1945년","1960년"],answer : "1937년"},
        {question : "상명대학교 캠퍼스가 위치한 지역은?",option : ["대전과 수원","서울과 천안","서울과 광주"],answer : "서울과 천안"},
        {question : "상명대학교의 설립자 이름은?",option : ["이순신 장군","정약용 선생","배상명 박사"],answer : "배상명 박사"}
    ];

    const currentQuestion = quesitons[currentIndex];

    useEffect(()=>{
        if(isanwer == false){
            const timer = setTimeout(() => {
                const nextIndex = currentIndex + 1;
                if(nextIndex < quesitons.length){
                    setcurrentIndex(nextIndex);
                    setisanswer(false);
                }
                else{
                    setisfinish(true);
                }
            }, 5000);
            return() =>{clearTimeout(timer);}
        }
    }, [isanwer,currentIndex]);
//타이머가 5초가 지나면 다음 문제로 넘어감

    function answer(selectoption) {
        if (selectoption === currentQuestion.answer) {
          setscore(score => score + 1);
        }
        const nextIndex = currentIndex + 1;
        if(nextIndex < quesitons.length){
            setcurrentIndex(nextIndex);
            setisanswer(false);
        }
        else{
            setisfinish(true);
        }
      }
//문제의 답을 선택하면 다음 문제로 넘어감

    function retry(){
        setcurrentIndex(0);
        setscore(0);
        setisfinish(false);
        setisanswer(false);
    }



    return(
        <div>
            {isfinish ? (<Resultscoretotal score = {score} total = {quesitons.length} retry = {retry}/>) :(<QuestionDataAnswer currentQuestion={currentQuestion} answer={answer}/>)}
        </div>
    );
}


export default QuizApp;
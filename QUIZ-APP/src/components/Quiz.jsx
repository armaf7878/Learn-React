import { useEffect, useState } from "react";
import Results from "./Result";

const quizData = [
    {
    question: "Biến nào sau đây là hợp lệ trong JavaScript?",
    options: ["1variable", "_variable", "var-name", "var name"],
    answer: "_variable",
  },
  {
    question:
      "Trong JavaScript, kiểu dữ liệu nào sau đây là kiểu dữ liệu nguyên thủy (primitive)?",
    options: ["object", "array", "string", "function"],
    answer: "string",
  },
  {
    question:
      "Thuật toán sắp xếp nào sau đây có độ phức tạp trung bình là O(n log n)?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Linear Sort"],
    answer: "Merge Sort",
  },

];


const Quiz = () =>{
    const [optionSelected, setOptionSelected] = useState("");
    const [userAnswers, setUserAnswers] = useState(Array.from({length:quizData.length}));
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuizEnded, setIsQuizEnded] = useState(false);
    const [isScore, setIsScore] = useState(0);
    const score = 0;


    const handleSelectedOption = (option, index) => {

        setOptionSelected(option); 
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = index;
        setUserAnswers(newUserAnswers);

        if(option === quizData[currentQuestion].answer){
            setIsScore(prev => prev + 1);
        }
         
        console.log(isScore);
        score = isScore;
    };

    const goNext = () => {
        
        if(currentQuestion === quizData.length -1){
          setIsQuizEnded (true); 
        }else{
          setCurrentQuestion((prev => prev +1));
        }
        

        const answer = Number(userAnswers[currentQuestion + 1]);
        const pastOptionSelected = quizData[currentQuestion + 1].options[answer];
        
     
        
        if(answer !== undefined){
          setOptionSelected(pastOptionSelected);
        }else{
          setOptionSelected("");
        }
    }
    
    const goBack = () => {
        if(currentQuestion >0){
            setCurrentQuestion((prev => prev -1));
            setOptionSelected(""); 
        }
        const answer = Number(userAnswers[currentQuestion - 1]);
        const pastOptionSelected = quizData[currentQuestion - 1].options[answer];

        if(answer !== undefined){
          setOptionSelected(pastOptionSelected);
        }else{
          setOptionSelected("");
        }

    };

    if(isQuizEnded){
      return(<Results 
              score={isScore} 
              totalQuestion={quizData.length} 
              
      />) 
    };

    return(
        <div>
            <h2>Câu {currentQuestion + 1}</h2>
            <p className="question">{quizData[currentQuestion].question}</p>
            {quizData[currentQuestion].options.map((option, index) => (
                <button 
                    key={option}
                    className={`option ${optionSelected === option ? "selected" : ""}`}
                    onClick={() => handleSelectedOption(option, index)}
                    disabled = {!!optionSelected && optionSelected !== option}
                >{option}</button>
            ))}

            
            {optionSelected ? (optionSelected === quizData[currentQuestion].answer ?(
              <p className="correct-answer"> Câu trả lời chính xác </p>):(
              <p className="incorrect-answer">Câu trả lời chưa chính xác</p>
              )): ("") }

            <div className="nav-buttons">
                <button onClick={goBack} disabled={currentQuestion === 0}> Quay Lại</button>
                <button 
                  onClick={goNext} 
                  disabled={!optionSelected}
                > {currentQuestion === quizData.length -1 ? "Hoàn Thành Quizz" : "Kế tiếp"}</button>
            </div>
        </div>  
    );
};

export default Quiz;
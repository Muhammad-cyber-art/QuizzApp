import React, { useRef } from "react";
import { useState } from "react";
// import "./test.css";
import Result from "./Result";
function Test({ questions }) {
  const h1ref = useRef();
  const [answeredQuestions, setAnsweredQuestions] = useState(1);
  const [correctAnswerCount, setcorrectAnswerCount] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [statusDisabled, setStatusDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  // console.log(questions);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = questions.questions[questionIndex].answer;
    if (selectedAnswer == null) {
      alert("plese select one answer");
    } else {
      setStatusDisabled(true);
      if (selectedAnswer == correctAnswer) {
        h1ref.current.style.color = "#0dfd0d";
        h1ref.current.textContent = "Wow, Correct answer :)";
        setcorrectAnswerCount(correctAnswerCount + 1);
      } else {
        console.log(false);
        h1ref.current.style.color = "red";
        h1ref.current.textContent = "Oops, incorrect answer  :(";
      }
    }
  };
  const handleNextSubmit = () => {
    setTimeout(() => {
      setQuestionIndex(questionIndex + 1);
      setStatusDisabled(false);
      // setAnswerStatus(false)
      setAnsweredQuestions(answeredQuestions + 1);
      setSelectedAnswer(null);
    }, 1000);
  };
  if (questionIndex > 4) {
    return <Result quest={questions} correctAnswerCount={correctAnswerCount} />;
  }

  return (
    <div className="w-176 h-106  flex justify-evenly items-center testCont">
      <div className="w-76 h-96 testlar">
        <p className="text-gray-300">
          Question {answeredQuestions} of {questions.questions.length}
        </p>
        <br />
        <h1 className="text-2xl">
          {questions.questions[questionIndex].question}
        </h1>
        
        {/* <div style={{ width: "240px", background: "white", height: "5px" }}> */}
        <div className="babu"
          style={{
            width: (questions.length / answeredQuestions) * 100 + "%",
            background: "#4848f7",
            height: "5px",
            marginTop:"100px"
          }}
        ></div>
        {/* </div> */}
      </div>
      <form onSubmit={handleSubmit} className="w-76 h-96 ">
        <ul className="w-86 h-56  translate-x-4 translate-y-11">
          <p ref={h1ref} className="-mt-5">
            choose one answer
          </p>
          {questions.questions[questionIndex].options.map((option, index) => {
            return (
              <label key={option}>
                <li className="bg-white w-75 h-12 rounded-sm flex items-center mt-3 hover:scale-103 duration-300 cursor-pointer active:scale-97 ">
                  <input
                    type="radio"
                    onChange={() => setSelectedAnswer(option)}
                    disabled={statusDisabled}
                    name="options"
                    className="ml-5"
                  />
                  <h1 className="text-xl ml-5 text-black">{option}</h1>
                </li>
              </label>
            );
          })}
        </ul>
        <button
          onClick={handleNextSubmit}
          className="px-26 py-1 bg-blue-800 translate-x-11 mt-15 rounded hover:bg-blue-700 duration-300 active:scale-97"
        >
          {4 == questionIndex ? "Finish" : "Next"}
        </button>
      </form>
    </div>
  );
}

export default Test;

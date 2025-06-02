import React, { useState } from "react";
import { Link } from "react-router-dom";
function Result({ quest, correctAnswerCount }) {
  const [h1, setH1] = useState(" ");

  console.log(correctAnswerCount);


  return (
    <div className="w-98 h-55 text-center result">
      <div className="text-center pt-10 text-2xl font-bold -mt-15">
        <h1>{quest.title}</h1>
        <h1>Result : {correctAnswerCount} correct answer  of 5 questions</h1>
        <h1 style={correctAnswerCount > 3 ? {color: '#0dfd0d'} : {color: 'red'}}>{correctAnswerCount > 3 ? "Amazing !!!" : "No Bad"}</h1>
      </div><br />
      <Link to="/">
      <button className="px-15 bg-blue-800 py-2 rounded-2xl hover:bg-blue-700 active:bg-blue-800 duration-300">
          Back to Home
          </button>
          </Link>
    </div>
  );
}

export default Result;

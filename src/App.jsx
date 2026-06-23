// import { useState } from "react"
import QuestionCard from "./components/QuestionCard"
import { questions } from "./data/questions"
import { useState } from "react";

function App() {
const [currentQuestion,setCurrentQuestion] = useState(0);
const [selectedAnswer,setSelectedAnswer] = useState(null);
const [score,setScore] = useState(0);
const [isFinished, setIsFinished] = useState(false);
const [showFeedback, setShowFeedback] = useState(false);

const handleAnswer = (option) => {
  if (showFeedback) return;

  setSelectedAnswer(option);
  setShowFeedback(true);

  if (option === questions[currentQuestion].answer) {
    setScore(score + 1)
  }
}

const goToNext = () => {
  if (currentQuestion + 1 < questions.length) {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setShowFeedback(false);
  }else {
    setIsFinished(true);
  }

};


  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 ">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-purple-600 mb-2">
        Quiz App
      </h1>
      <p className="text-gray-400 mb-8">Test your knowledge</p>
    </div>
    <p>Score: {score}</p>
   
   {!isFinished ? (
    <>
     <QuestionCard 
    showFeedback={showFeedback}
    onAnswer={handleAnswer}
    data={questions[currentQuestion]}
    current={currentQuestion}
    total={questions.length}
    selected={selectedAnswer}
    />

    <div className="mt-6">
      {showFeedback && (
        <button 
        className="bg-gradient-to-r from-indigo-600 to-purple-600 py-3 px-6 rounded-lg font-medium shadow-lg cursor-pointer"
        onClick={goToNext}> 
          {currentQuestion + 1 < questions.length ? "Continue" : "See Results"}
        </button>
      )}
    </div>
    </>) :(
      <div className="text-center">
        <h2 className="text-3xl font-bold">Quiz Complete</h2>
        <p className="text-xl">
          You Scored<span className="font-bold"> {score} </span> out of {" "}
          <span className="font-bold">{questions.length} 
          </span>
           {" "} and it is {" "}
          {Math.round((score / questions.length) * 100)}%
        </p>
        <p className="mt-4 mb-6">
          Thank you for participating in the quiz!
        </p>
        <button 
          className="bg-gradient-to-r from-green-500 to-teal-500 py-3 px-6 rounded-lg font-medium shadow-lg cursor-pointer"
          onClick={() => {
            setCurrentQuestion(0);
            setSelectedAnswer(null);
            setScore(0);
            setIsFinished(false);
            setShowFeedback(false);
          }}
        >
          Restart Quiz
        </button>
      </div>
    )
   }

  </div>
  )
}

export default App
 
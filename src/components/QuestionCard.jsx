import React from 'react'

const QuestionCard = ({ data, onAnswer, showFeedback, selected }) => {
  const { question, options, answer } = data;


  const getButtonStyle = (option) => {
    if (!showFeedback) {return "bg-indigo-700 hover:bg-indigo-600 hover:scale-[1.01]"
    }

    if (option === answer) 
      return "bg-green-600";
    
    if (option === selected) 
      return "bg-red-600";
    
      };

  return (
    <div className='bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-xl border border-gray-700'>
        <p>
        {question}    
        </p>
        <div className='grid gap-3'>
           {options.map((option, index) =>(
            <button 
            className={`${getButtonStyle(option)} text-left px-4 py-3 cursor-pointer bg-blue-800 rounded-lg text-white `}
            key={index}
            onClick={() => onAnswer(option)}
            disabled={showFeedback}
            >{option}</button>
           ))}
        </div>
    </div>
  )
}

export default QuestionCard
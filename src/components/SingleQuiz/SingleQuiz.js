import React from 'react';
import './SingleQuiz.css'
import Question from '../Question/Question';

const SingleQuiz = ({singleQuiz}) => {
    console.log(singleQuiz)
    const {correctAnswer,question, options}= singleQuiz;
    const showQuestion =(correctAnswer)=>{
        
        alert(correctAnswer)
        console.log(correctAnswer)
        
    }
    return (
        <div>
               <div className='question-container'>
                
                <p>{question}</p>
                <div>
                <button onClick={()=>showQuestion(correctAnswer)}>
                    show
                </button>
                </div>
               </div>
                {
                    options.map(question=><Question
                    key={question.id}
                    question={question}
                    correctAnswer={correctAnswer}
                    
                    ></Question>)
                }
        </div>
    );
};

export default SingleQuiz;
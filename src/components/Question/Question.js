import React from 'react';
import './Question.css'

const Question = ({question, correctAnswer}) => {
    console.log(question)
    return (
        <div >
            <div  >
                <button onClick={()=> answer(correctAnswer)}>

                {question}
                </button>
                </div>
                
           
            
        </div>
    );
};

export default Question;
import React from 'react';
import Question from '../Question/Question';

const SingleQuiz = ({singleQuiz}) => {
    console.log(singleQuiz)
    const {correctAnswer,question, options}= singleQuiz;
    
    const  answer =(correctAnswer)=>{
        if(correctAnswer){
            alert('done')

        }
        else{
            alert('wrong')

        }
    }
    
  
    return (
        <div>
               
                <p>{question}</p>
                {
                    options.map(question=><Question
                    key={question.id}
                    question={question}
                    
                    ></Question>)
                }
        </div>
    );
};

export default SingleQuiz;
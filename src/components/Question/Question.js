
import React from 'react';
 
import './Question.css'

const Question = ({question, correctAnswer}) => {
   
    const  answer =(correctAnswer, question)=>{
        if(correctAnswer.toLowercase()===question.toLowercase()){
            alert('done')

        }
        else{
            alert('wrong')

        }
    }
    return (
        <div >
            <div  >
                <button className='every-question' onClick={()=> answer(correctAnswer,question)}>

                {question}
                </button>
                
                </div>
                
           
            
        </div>
    );
};

export default Question;
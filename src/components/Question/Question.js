
import React from 'react';
 
import './Question.css'

const Question = ({question,options, correctAnswer}) => {
   
    const  answer =(correctAnswer, options)=>{

        
        console.log(options)
        if(correctAnswer.toLowercase()===options.toLowercase()){
            alert('done')

        }
        else{
            alert('wrong')

        }
    }
    
    return (
        <div >
            <div  >
                <button className='every-question' onClick={()=> answer(correctAnswer,options)}>

                {question}
                </button>
                
                </div>
                
           
            
        </div>
    );
};

export default Question;
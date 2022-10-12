
import React from 'react';
 
import './Question.css'

const Question = ({question,options, correctAnswer}) => {
   
    const  answer =(correctAnswer, options)=>{

        
        console.log(options,correctAnswer)
        if(correctAnswer === options){
            console.log('done')
            alert('done')

        }
        else{
            console.log('wrong')
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
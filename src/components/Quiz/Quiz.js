import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
    console.log(quiz)
    const {id, name, logo, total}= quiz;
    return (
    

     
        <div className='quiz-container'>
            <section>
                
            </section>
           
            <div>
            <img className='quiz-image' src={logo} alt="" />
            <div className='info-container'>
                <div className='name-container'>
                <h3 >Name: {name}</h3>
                </div>
                <div className='total-container'>
                <h4>Total: {total}</h4>

                </div>
            </div>
            
            
            <button className='btn-one'>Start quiz</button>
            </div>
           
            
        </div>
    );
};

export default Quiz;
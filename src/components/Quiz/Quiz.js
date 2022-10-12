import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({quiz}) => {
  
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
            <Link to={`/quiz/${id}`}>
               
            
            <button type='button' className='btn-one'>Start quiz</button>


            </Link>
            
            
            
           
            </div>
           
            
        </div>
    );
};

export default Quiz;
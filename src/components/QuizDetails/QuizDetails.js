import React from 'react';
import './QuizDetails.css'
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const QuizDetails = () => {
    const quiz = useLoaderData()
    const quizDetails = quiz.data;
    const {name, questions} = quizDetails
   

    return (
        <div>
            <h4 className='quiz-details'>Quiz Details {quizDetails.length} </h4>
            <p className='topic'> <u>
            Quiz Topic Name is {name}</u> </p>
            {
                questions.map(singleQuiz=><SingleQuiz
                 key={singleQuiz}
                  singleQuiz={singleQuiz}
                
                ></SingleQuiz>) 


            }
            
        </div>
    );
};

export default QuizDetails;
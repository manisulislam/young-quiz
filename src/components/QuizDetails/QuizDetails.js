import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const QuizDetails = () => {
    const quiz = useLoaderData()
    const quizDetails = quiz.data;
    const {name, questions} = quizDetails
   

    return (
        <div>
            <h4>quiz details {quizDetails.length} </h4>
            <p>name:{name}</p>
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
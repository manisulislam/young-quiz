import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const quizes = useLoaderData()
    console.log(quizes)


    return (
        <div>
            
            {

quizes.data.map(quiz =><Quiz
key={quiz.id}
quiz={quiz}

></Quiz>)
            }
        </div>
    );
};

export default Home;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const quizes = useLoaderData()
    const moreQuizes = quizes.data;
    


    return (

        
        <div>
            <section className='header-section'>
                <h2 className='header-text'>
                    We don't just build websites, we build website that sells.
                </h2>
                
            </section>
            
            {

moreQuizes.map(quiz =><Quiz
key={quiz.id}
quiz={quiz}

></Quiz>)
            }
        </div>
    );
};

export default Home;
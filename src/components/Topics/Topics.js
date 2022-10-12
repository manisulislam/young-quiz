import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics)
    return (
        <div>
            <h1>this is topis</h1>
        </div>
    );
};

export default Topics;
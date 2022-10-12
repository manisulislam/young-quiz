import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const  Statistics = () => {
    const statistics = useLoaderData();
    const statisticsData = statistics.data
    console.log(statisticsData)
    
    return (
        <div>
        <h1>statistics</h1>
        const renderLineChart =(
        <LineChart width={400} height={400} data={statisticsData}>
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
      </LineChart>
    )
        </div>
    );
};

export default Statistics;
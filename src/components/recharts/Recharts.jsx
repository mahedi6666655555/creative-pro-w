import React from 'react';
// import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';


const Recharts = () => {
    let studentResults = [

        {
            "id": 3,
            "name": "mahedi",
            "math": 90,
            "science": 85,
            "english": 70,
            "history": 80
        },
        {
            "id": 3,
            "name": "Alex Kim",
            "math": 33,
            "science": 85,
            "english": 70,
            "history": 80
        },

        {
            "id": 3,
            "name": "nishat",
            "math": 10,
            "science": 85,
            "english": 70,
            "history": 80
        },

        // ...and so on
    ];

    return (
        <div>
            <div className='w-full h-screen '>
                <div>

                    <LineChart className='mx-auto mt-96 ' width={700} height={500} data={studentResults}>
                        <XAxis dataKey="name"></XAxis>
                        <YAxis ></YAxis>

                        <Line type="monotone" dataKey="name" stroke="#8884d8" />
                        <Line type="monotone" dataKey="math" stroke="#82ca9d" />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Recharts;
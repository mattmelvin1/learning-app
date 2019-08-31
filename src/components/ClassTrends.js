import React, {PureComponent} from 'react';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

const data = [
    {
        name: 'Question 1',
        correct: 18,
        incorrect: 2,
        amt: 20
    }, {
        name: 'Question 2',
        correct: 15,
        incorrect: 5,
        amt: 20
    }, {
        name: 'Question 3',
        correct: 19,
        incorrect: 1,
        amt: 20
    }, {
        name: 'Question 4',
        correct: 20,
        incorrect: 0,
        amt: 20
    }, {
        name: 'Question 5',
        correct: 4,
        incorrect: 16,
        amt: 20
    }, {
        name: 'Question 6',
        correct: 5,
        incorrect: 15,
        amt: 20
    }, {
        name: 'Question 7',
        correct: 20,
        incorrect: 0,
        amt: 20
    }
];

export default class ClassTrends extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div
                className='Chart'
                style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <BarChart
                    width={1000}
                    height={500}
                    data={data}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="incorrect" fill="#E6B0AA"/>
                    <Bar dataKey="correct" fill="#D5F5E3"/>
                </BarChart>
            </div>
        );

    }
}
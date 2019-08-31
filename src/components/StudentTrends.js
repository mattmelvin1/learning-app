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
        name: 'Layla',
        correct: 18,
        incorrect: 2,
        amt: 20
    }, {
        name: 'Vicki',
        correct: 18,
        incorrect: 2,
        amt: 20
    }, {
        name: 'Abby',
        correct: 18,
        incorrect: 2,
        amt: 20
    }, {
        name: 'Gage',
        correct: 18,
        incorrect: 2,
        amt: 20
    }, {
        name: 'Cruz',
        correct: 18,
        incorrect: 2,
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
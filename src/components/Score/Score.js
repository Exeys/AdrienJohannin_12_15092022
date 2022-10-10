import React from "react";
import { PolarAngleAxis, RadialBar, RadialBarChart, Legend } from "recharts";
import Proptypes from 'prop-types'



export default function Score({ score }) {

    const data = [
        {
            "value": score
        }
    ];
    return (<figure>
        <div style={{
            fontSize: '15px',
            fontColor: '#20253A',
            fontWeight: '500',
            fontFamily: 'Roboto',
            textAlign: 'left'
        }}>Score</div>
        <RadialBarChart width={200} height={200} innerRadius={80} outerRadius={80} barSize={12} data={data} startAngle={-270} endAngle={90}>
            <PolarAngleAxis type="number" domain={[0, 1]} angleAxisId={0} tick={false} />
            <RadialBar dataKey="value" cornerRadius={50} background={false} fill="#E60000" />
            <Legend data={data} value="score" verticalAlign="middle" align="center" content={CustomLegend} />
        </RadialBarChart>
    </figure>


    )
}
const CustomLegend = ({ payload }) => (

    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
    }}>
        <h2 style={{
            color: '#282D30',
            fontSize: '26px',
            fontFamily: 'Roboto',
            marginBottom: '0'
        }}>{payload[0].payload.value * 100}%</h2>
        <div>de votre</div>
        <div>objectif</div>
    </div>
);

Score.propTypes = {
    score: Proptypes.array
}
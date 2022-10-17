import React from "react";
import { PolarAngleAxis, RadialBar, RadialBarChart, Legend } from "recharts";
import Proptypes from 'prop-types'


/**
 * A function that render Score component which contain a Radial Bar Chart
 * of user daily score 
 * @param {Object} score
 */
export default function Score({ score }) {

    /**
     * Data as object from props are convert to an array to ease usage in component
     */
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

/**
 * Custom component render a personalized legend
 */
const CustomLegend = ({ payload }) => (

    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
    }}>
        <div id="circle" style={{
            height: '145px',
            width: '145px',
            backgroundColor: 'white',
            borderRadius: '50%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
            zIndex: 0
        }}></div>
        <h2 style={{
            color: '#282D30',
            fontSize: '26px',
            fontFamily: 'Roboto',
            marginBottom: '0',
            zIndex: 1
        }}>{payload[0].payload.value * 100}%</h2>
        <div style={{ zIndex: 1 }}>de votre</div>
        <div style={{ zIndex: 1 }}>objectif</div>
    </div>
);

Score.propTypes = {
    score: Proptypes.object
}
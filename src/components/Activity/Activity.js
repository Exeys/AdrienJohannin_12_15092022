import React from "react";
import './Activity.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Proptypes from 'prop-types'

/**
 * A function that render Activity component which contain a Bar Chart 
 * of user last activity from parameter object
 * @param {Object} userActivity
 */
export default function Activity({ userActivity }) {

    return (
        <div className="ActivityContent">
            <div className="ActivityLegend">
                <div className="ActivityTitle">
                    <p>Activité quotidienne</p>
                </div>
                <ul className="ActivityLegendList">
                    <li id="dot1">Poids (kg)</li>
                    <li id="dot2">Calories brûlées (kCal)</li>
                </ul>
            </div>
            <div className="ActivityCharts" style={{ height: '140px' }}>
                <ResponsiveContainer>
                    <BarChart
                        barGap={6}
                        barSize={39}
                        width={490}
                        height={140}
                        data={userActivity.sessions}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" dy={16} tickLine={false} />
                        <YAxis yAxisId="right" dataKey="kilogram" dx={25} orientation="right" domain={['dataMin - 1', 'dataMax + 1']} tickLine={false} interval={1} />
                        <YAxis hide={true} yAxisId="left" dataKey="calories" dx={25} orientation="left" domain={['dataMin - 100', 'dataMax + 100']} tickLine={false} />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: "#C4C4C480" } } wrapperStyle={{outline:'none'}} />
                        <Bar yAxisId="right" radius={[20, 20, 0, 0]} dataKey="kilogram" fill="#282D30" barSize={5} />
                        <Bar yAxisId="left" radius={[20, 20, 0, 0]} dataKey="calories" fill="#E60000" barSize={5} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>


    )
}

/**
 * Custom component rendering a personalized tooltip
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
        return (
            <div style={{ backgroundColor: "#E60000" }}>
                <div>
                    <div >
                        <div style={{ color: "white", padding: 8, fontSize: 5 }}>{payload[0].value}kg</div>
                        <div style={{ color: "white", padding: 8, fontSize: 5 }}>{payload[1].value}kcal</div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

Activity.propTypes = {
    userActivity: Proptypes.object
}

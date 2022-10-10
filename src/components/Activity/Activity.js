import React from "react";
import './Activity.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Proptypes from 'prop-types'

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
            {/* Component chart for activity */}
            <div className="ActivityCharts" style={{ height: '200px' }}>
                <ResponsiveContainer>
                    <BarChart
                        barGap={8}
                        barSize={56}
                        width={700}
                        height={200}
                        data={userActivity.sessions}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" dy={16} tickLine={false} tickFormatter={day => day.split("-")[2][1]} />
                        <YAxis yAxisId="right" dataKey="kilogram" dx={25} orientation="right" domain={['dataMin - 1', 'dataMax + 1']} tickLine={false} interval={1} />
                        <YAxis hide={true} yAxisId="left" dataKey="calories" dx={25} orientation="left" domain={['dataMin - 100', 'dataMax + 100']} tickLine={false} />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: "#C4C4C480" }} />
                        <Bar yAxisId="right" radius={[20, 20, 0, 0]} dataKey="kilogram" fill="#282D30" barSize={7} />
                        <Bar yAxisId="left" radius={[20, 20, 0, 0]} dataKey="calories" fill="#E60000" barSize={7} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>


    )
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: "#E60000" }} className="custom-tooltip">
                <div>
                    {payload.map((pld, index) => (
                        <div key={index}>
                            <div style={{ color: "white", padding: 12, fontSize: 7 }}>{pld.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return null;
};

Activity.propTypes = {
    userActivity: Proptypes.array
}

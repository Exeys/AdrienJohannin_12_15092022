import React from 'react'
import { LineChart, Line, XAxis, Tooltip } from 'recharts';
import Proptypes from 'prop-types'


/**
 * A function that render a Sessions component which contain a Line Chart
 * of user last sessions from parameter object
 * @param {Object} userAvgSessions
 */
export default function Sessions({ userAvgSessions }) {

    return (
        <div style={{ margin: '0', paddingBottom: '20px' }}>
            <div style={{
                fontSize: '11px',
                color: '#FFFFFF',
                fontWeight: '500',
                fontFamily: 'Roboto',
                textAlign: 'left',
                marginLeft: '24px',
                marginBottom: '28px',
                maxWidth: '105px'
            }}>Durée moyenne des sessions</div>

            <LineChart width={181} height={88} data={userAvgSessions.sessions}>
                <Tooltip cursor={<CustomCursor />} content={<CustomTooltip />} wrapperStyle={{ outline: 'none' }} />
                <XAxis dy={9} style={{ fill: '#FFFFFF' }} tickFormatter={userAvgSessions} tickLine={false} dataKey="day" axisLine={false} />
                <Line dot={false} type={"monotone"} dataKey="sessionLength" stroke="#ffffff" strokeWidth={2} />
            </LineChart>
        </div>
    )
}

/**
 * Custom component rendering a personalized tooltip
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: "white" }} className="custom-tooltip">
                <div>
                    {payload.map((pld, index) => (
                        <div key={index}>
                            <div style={{ color: "black", padding: 5, fontSize: 6 }}>{pld.value} min</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return null;
};

/** 
 * Custom component rendering a personalized cursor
 */
const CustomCursor = ({ points }) => {
    return (
        <rect x={points[0].x} y="0" height="100%" width="100%" fill="rgba(0, 0, 0, 0.1)"></rect>
    )
}


Sessions.propTypes = {
    userAvgSessions: Proptypes.object
}
import React from 'react'
import { LineChart, Line, XAxis, Tooltip, Rectangle } from 'recharts';
import Proptypes from 'prop-types'


/**
 * A function that render a Sessions component which contain a Line Chart
 * of user last sessions from parameter object
 * @param {Object} userAvgSessions
 */
export default function Sessions({ userAvgSessions }) {

    /**
     * Day as number from data are changing for letters
     */
    const days = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };
    const formatDate = (item) => days[item];
    return (
        <div style={{ margin: '0', paddingBottom: '20px' }}>
            <div style={{
                fontSize: '15px',
                color: '#FFFFFF',
                fontWeight: '500',
                fontFamily: 'Roboto',
                textAlign: 'left',
                marginLeft: '34px',
                marginBottom: '40px',
                maxWidth: '150px'
            }}>Durée moyenne des sessions</div>

            <LineChart width={258} height={126} data={userAvgSessions.sessions}>
                <Tooltip cursor={<CustomCursor />} content={<CustomTooltip />} wrapperStyle={{ outline: 'none' }} />
                <XAxis dy={9} style={{ fill: '#FFFFFF' }} tickFormatter={formatDate} tickLine={false} dataKey="day" axisLine={false} />
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
                            <div style={{ color: "black", padding: 7, fontSize: 8 }}>{pld.value} min</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return null;
};

/* Todo if time */
const CustomCursor = () => {
    return (
        <Rectangle />
    );
};


Sessions.propTypes = {
    userAvgSessions: Proptypes.object
}
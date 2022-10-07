import React from 'react'
import './Sessions.css'
import { LineChart, Line, XAxis, Tooltip } from 'recharts';


export default function Sessions({ userAvgSessions }) {
    const daysWeek = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };
    const formatDate = (item) => daysWeek[item];
    return (
        <figure style={{ margin: '0', paddingBottom: '20px' }}>
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

                <Tooltip cursor={false} content={<CustomTooltip />} />
                <XAxis dy={15} style={{ fill: '#FFFFFF', fontSize: '12px' }} tickFormatter={formatDate} tickLine={false} dataKey="day" axisLine={false}></XAxis>
                <Line dot={false} type={"monotone"} dataKey="sessionLength" stroke="#ffffff" strokeWidth={2} />
            </LineChart>
        </figure>

    )

}
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


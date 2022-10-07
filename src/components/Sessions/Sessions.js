import React from 'react'
import './Sessions.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'L',
        pv: 30,
    },
    {
        name: 'M',
        pv: 23,
    },
    {
        name: 'M',
        pv: 45,
    },
    {
        name: 'J',
        pv: 50,
    },
    {
        name: 'V',
        pv: 0,
    },
    {
        name: 'S',
        pv: 0,
    },
    {
        name: 'D',
        pv: 60,
    },
]

export default function Sessions() {

    const daysWeek = { 0: 'L', 1: 'M', 2: 'M', 3: 'J', 4: 'V', 5: 'S', 6: 'D' };
    const formatDate = (item) => daysWeek[item];
    return (
        <figure style={{ margin: '0', paddingBottom: '20px' }}>
            <div style={{
                fontSize: '15px',
                color: '#FFFFFF',
                fontWeight: '500',
                fontFamily: 'Roboto',
                textAlign: 'left',
                marginLeft:'34px',
                marginBottom:'40px',
                maxWidth:'150px'
            }}>Durée moyenne des sessions</div>
            <LineChart width={258} height={126} data={data}>

                <Tooltip cursor={false} content={<CustomTooltip />} data={data.pv} />
                <XAxis dy={15} style={{ fill: '#FFFFFF', fontSize: '12px' }} tickFormatter={formatDate} tickLine={false} dataKey={data.name} axisLine={false}></XAxis>
                <Line dot={false} type={"monotone"} dataKey="pv" stroke="#ffffff" strokeWidth={2} />
            </LineChart>
        </figure>

    )

}
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: "white" }} className="custom-tooltip">
                <div>
                    {payload.map((pld) => (
                        <div>
                            <div style={{ color: "black", padding: 7, fontSize: 8 }}>{pld.value} min</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return null;
};


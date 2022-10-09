import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


export default function Tracker({ userPerformance }) {

  const kind = { 1: 'Cardio', 2: 'Energie', 3: 'Endurance', 4: 'Force', 5: 'Vitesse', 6: 'Intensité' };
  const formatKind = (item) => kind[item];

  return (
    <RadarChart data={userPerformance.data} outerRadius="60%" width={250} height={250}>
      <PolarGrid radialLines={false} />
      <PolarRadiusAxis tick={false} axisLine={false} tickCount={6} />
      <PolarAngleAxis tick={{
        fill: "white",
        fontSize: "12px",
        fontWeight: "500"
      }} dataKey="kind" tickFormatter={formatKind} />
      <Radar name="activity" dataKey="value" fill="rgba(255, 1, 1, 0.7)" />
    </RadarChart>

  )
} 
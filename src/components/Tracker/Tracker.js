import React from "react";
import './Tracker.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  {
    subject: 'Intensité',
    A: 100,
  },
  {
    subject: 'Vitesse',
    A: 210,
  },
  {
    subject: 'Force',
    A: 170,
  },
  {
    subject: 'Endurance',
    A: 200,
  },
  {
    subject: 'Energie',
    A: 190,
  },
  {
    subject: 'Cardio',
    A: 160,
  },
]

export default function Tracker() {
  return (
      <RadarChart outerRadius="75%" data={data} width={250} height={250}>
        <PolarGrid radialLines={false} />
        <PolarRadiusAxis tick={false} axisLine={false} tickCount={6} />
        <PolarAngleAxis tick={{
          fill: "white",
          fontSize: "12px",
          fontWeight: "500"
        }} dataKey="subject" />
        <Radar name="Mike" dataKey="A" fill="rgba(255, 1, 1, 0.7)" />
      </RadarChart>

  )
}
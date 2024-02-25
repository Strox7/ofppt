import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import "./redarChart.css";

function Chart2() {
  const data = [
    {
      subject: "M102",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "French",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "English",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "M104",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "M101",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "M107",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#1976d2"
          fill="#1976d2"
          fillOpacity={0.4}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
export default Chart2;

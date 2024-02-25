import "./redarChart.css";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const StatisticsChart = () => {
  const data = [
    {
      name: "January",

      performance: 2400,
      amt: 2400,
    },
    {
      name: "February",
      performance: 1398,
      amt: 2210,
    },
    {
      name: "March",

      performance: 9800,
      amt: 2290,
    },
    {
      name: "April",

      performance: 6008,
      amt: 2000,
    },
    {
      name: "May",

      performance: 8000,
      amt: 2181,
    },
    {
      name: "June",
      performance: 6000,
      amt: 2500,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient> */}
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1976d2" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#1976d2" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        {/* <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        /> */}
        <Area
          type="monotone"
          dataKey="performance"
          stroke="#1976d2"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StatisticsChart;

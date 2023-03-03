import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Fev",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Abr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Maio",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Julho",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            bottom: 5,
            right: 10,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            axisLine={false}
            tickLine={false}
            stroke="#ffffff"
            dataKey="name"
          />
          <YAxis axisLine={false} tickLine={false} stroke="#ffffff" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff2c",
              color: "#342863",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#ffffff"
            activeDot={{ r: 8 }}
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

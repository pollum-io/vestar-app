import React, { PureComponent, useMemo } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const shades = [
  "#D7C7FE",
  "#CEBAFF",
  "#BCA1FF",
  "#9E7AFA",
  "#865DF0",
  "#6E40E7",
  "#623BE0",
  "#5133D7",
  "#412DCF",
  "#2321C0",
];

const data = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  name: `CRP1642 ${++i}`,
  value: 1,
  color: shades[i],
}));

export default class BarCharts extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          layout="vertical"
          barSize={35}
        >
          <XAxis type="number" tick={false} hide />
          <YAxis
            strokeWidth={0}
            dataKey="name"
            axisLine={false}
            type="category"
          />
          <Bar dataKey="value">
            {data.map(value => (
              <Cell key={value.id} fill={value.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

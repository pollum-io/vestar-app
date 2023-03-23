import { format } from "date-fns";
import moment from "moment";
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

interface IExample {
	chartData: any[];
}

export const Examaple: React.FC<IExample> = props => {
	const { chartData } = props;

	const CustomTooltip = ({ active, payload, label }: any) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip">
					<p className="amount">{`${payload[0].value}`}</p>
				</div>
			);
		}

		return null;
	};

	return (
		<ResponsiveContainer width="100%" height="100%">
			<LineChart
				width={500}
				height={300}
				data={chartData}
				margin={{
					top: 5,
					bottom: 5,
					right: 10,
					left: 20,
				}}
			>
				<CartesianGrid vertical={false} />
				<XAxis
					axisLine={false}
					tickLine={false}
					stroke="#ffffff"
					tickFormatter={date => format(new Date(date), "MMM")}
					dataKey="date"
				/>
				<YAxis
					axisLine={false}
					tickLine={false}
					stroke="#ffffff"
					dataKey={"amount"}
				/>
				<Tooltip
					contentStyle={{
						backgroundColor: "#ffffff",
						color: "#000000",
						borderRadius: "5px",
						padding: "10px",
						border: "none",
					}}
					wrapperStyle={{ border: "none" }}
					itemStyle={{ color: "#6c5ce7" }}
					content={CustomTooltip}
				/>
				<Line
					type="monotone"
					dataKey={"amount"}
					stroke="#ffffff"
					activeDot={{ r: 8 }}
					strokeWidth={4}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

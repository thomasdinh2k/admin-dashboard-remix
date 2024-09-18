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
import { FiUser } from "react-icons/fi";

const data = [
	{
		name: "January",
		Desktop: 4000,
		Mobile: 2400,
		Other: 2400,
	},
	{
		name: "February",
		Desktop: 3000,
		Mobile: 1398,
		Other: 2210,
	},
	{
		name: "March",
		Desktop: 2000,
		Mobile: 9800,
		Other: 2290,
	},
	{
		name: "April",
		Desktop: 2780,
		Mobile: 3908,
		Other: 2000,
	},
	{
		name: "May",
		Desktop: 1890,
		Mobile: 4800,
		Other: 2181,
	},
	{
		name: "June",
		Desktop: 2390,
		Mobile: 3800,
		Other: 2500,
	},
	{
		name: "July",
		Desktop: 3490,
		Mobile: 4300,
		Other: 2100,
	},
];

const ActivityGraph = () => {
	return (
		<div className="col-span-8 overflow-hidden rounded border border-stone-300">
			<div className="p-4">
				<h3 className="flex items-center gap-1.5 font-medium">
					<FiUser /> Activity
				</h3>
			</div>

			{/* // [x] Graphs  */}
			<div className="h-64 px-4">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart width={500} height={300} data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis
							dataKey="name"
							padding={{ left: 30, right: 30 }}
							className="text-xs"
						/>
						<YAxis className="text-xs" />
						<Tooltip />
						<Legend className="text-lg" />
						<Line
							type="monotone"
							dataKey="Mobile"
							stroke="#8884d8"
							activeDot={{ r: 8 }}
						/>
						<Line
							type="monotone"
							dataKey="Desktop"
							stroke="#82ca9d"
						/>
						<Line
							type="monotone"
							dataKey="Other"
							stroke="#2c2c2f"
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default ActivityGraph;

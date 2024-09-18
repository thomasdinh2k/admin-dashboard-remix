import { FiEye } from "react-icons/fi";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from "recharts";

const trafficStats = [
	{
		device: "Desktop",
		traffic: 120,
		engagement: 110,
		fullMark: 150,
	},
	{
		device: "Mobile",
		traffic: 98,
		engagement: 130,
		fullMark: 150,
	},
	{
		device: "Tablet",
		traffic: 86,
		engagement: 130,
		fullMark: 150,
	},
	{
		device: "Laptop",
		traffic: 99,
		engagement: 100,
		fullMark: 150,
	},
	{
		device: "Console",
		traffic: 15,
		engagement: 90,
		fullMark: 150,
	},
	{
		device: "Other",
		traffic: 65,
		engagement: 85,
		fullMark: 150,
	},
];

const UsageRadar = () => {
	return (
		<div className="col-span-4 overflow-hidden rounded border border-stone-300">
			<div className="p-4">
				<h3 className="flex items-center gap-1.5 font-medium">
					<FiEye /> Usage
				</h3>
			</div>

			{/* // [x] Graphs  */}
			<div className="h-64 px-4">
				<ResponsiveContainer width="100%" height="100%">
					<RadarChart
						cx="50%"
						cy="50%"
						outerRadius="60%"
						data={trafficStats}
					>
						<PolarGrid />
						<PolarAngleAxis dataKey="device" className="text-xs" />
						<PolarRadiusAxis className="text-xs" />
						<Radar
							name="Mike"
							dataKey="traffic"
							stroke="#8884d8"
							fill="#8884d8"
							fillOpacity={0.6}
						/>
					</RadarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default UsageRadar;

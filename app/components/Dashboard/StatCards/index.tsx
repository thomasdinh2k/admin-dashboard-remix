import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

const StatsCards = () => {
	return (
		<>
			<Card
				title="Gross Revenue"
				value="$120,054"
				pillText="2.75%"
				trend="up"
				period="From Jan 1st - Jul 31st"
			/>
			<Card
				title="Avg Order"
				value="$27,054"
				pillText="2.75%"
				trend="down"
				period="From Jan 1st - Jul 31st"
			/>
			<Card
				title="Trailing Year"
				value="$120,054"
				pillText="2.75%"
				trend="up"
				period="Previous 6 months"
			/>
		</>
	);
};

export default StatsCards;

const Card = ({ title, value, pillText, trend, period }) => {
	return (
		<div className="p-4 col-span-4 rounded border border-stone-300">
			<div className="flex mb-8 items-start justify-between">
				<div>
					<h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
					<p className="text-3xl font-semibold">{value}</p>
				</div>
				<span
					className={`text-xs flex  items-center gap-1 font-medium px-2 py-1 rounded ${
						trend === "up"
							? "bg-green-100"
							: "bg-red-100 text-red-700"
					}`}
				>
					{trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />}
					{pillText}
				</span>
			</div>
			<p className="text-xs text-stone-500">{period}</p>
		</div>
	);
};

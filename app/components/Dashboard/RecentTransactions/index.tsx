import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from "react-icons/fi";

const RecentTransactions = () => {
	return (
		<div className="p-4 col-span-12 rounded border border-stone-300">
			<div className="flex items-center justify-between">
				<h3 className="flex items-center gap-1.5 font-medium">
					<FiDollarSign /> Recent Transactions
				</h3>
				<button className="text-sm text-violet-500 hover:underline">
					See all
				</button>
			</div>
			<table className="w-full table-auto">
				<TableHead />

				<tbody>
					<TableRow
						cusId="#48148"
						sku="Pro 1 Month"
						date="Aug 2nd"
						price="$9.75"
						order={1}
					/>
					<TableRow
						cusId="#48150"
						sku="Premium 3 Months"
						date="Jul 29th"
						price="$29.95"
						order={2}
					/>
					<TableRow
						cusId="#48151"
						sku="Basic 1 Month"
						date="Aug 1st"
						price="$4.95"
						order={3}
					/>
					<TableRow
						cusId="#48152"
						sku="Pro 12 Months"
						date="Jul 25th"
						price="$99.95"
						order={4}
					/>
					<TableRow
						cusId="#48153"
						sku="Premium 1 Month"
						date="Aug 5th"
						price="$19.95"
						order={5}
					/>
				</tbody>
			</table>
		</div>
	);
};

export default RecentTransactions;

const TableHead = () => {
	return (
		<thead>
			<tr className="text-sm font-normal text-stone-500">
				<th className="text-start p-1.5">Customer ID</th>
				<th className="text-start p-1.5">SKU</th>
				<th className="text-start p-1.5">Date</th>
				<th className="text-start p-1.5">Price</th>
				<th className="w-8"></th>
			</tr>
		</thead>
	);
};

const TableRow = ({ cusId, sku, date, price, order }) => {
	return (
		<tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
			<td className="p-1.5">
				<a
					href="#"
					className="text-violet-600 underline flex items-center gap-1"
				>
					{cusId} <FiArrowUpRight />
				</a>
			</td>
			<td className="p-1.5">{sku}</td>
			<td className="p-1.5">{date}</td>
			<td className="p-1.5">{price}</td>
			<td className="w-8">
				<button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8">
					<FiMoreHorizontal />
				</button>
			</td>
		</tr>
	);
};

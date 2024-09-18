import { NavLink } from "@remix-run/react";
import { ROUTES } from "~/constants/routes";

const RouteSelect = () => {
	return (
		<div className="space-y-1">
			{/* <Route Icon={FiHome} selected={true} title="Dashboard"/>
        <Route Icon={FiHome} selected={false} title="Dashboard"/>
        <Route Icon={FiHome} selected={false} title="Dashboard"/>
        <Route Icon={FiHome} selected={false} title="Dashboard"/>
        <Route Icon={FiHome} selected={false} title="Dashboard"/> */}

			{ROUTES.map((route) => {
				return (
					<Route
						key={route.path}
						Icon={route.icon}
						title={route.title}
						path={route.path}
						selected={false}
					/>
				);
			})}
		</div>
	);
};

export default RouteSelect;

interface RouteProps {
	selected: boolean;
	Icon: React.ElementType;
	title: string;
	path: string;
}

const Route = ({ selected, Icon, title, path }: RouteProps) => {
	return (
		<NavLink
			to={path}
			className={({ isActive }) =>
				`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color]
                
                ${
					isActive || selected
						? "bg-white text-stone-950 shadow"
						: "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
				}
                `
			}

			// className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
			// 	selected
			// 		? "bg-white text-stone-950 shadow"
			// 		: "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
			// }`}
		>
			<Icon className={selected ? "text-black" : ""} />
			<span>{title}</span>
		</NavLink>
	);
};

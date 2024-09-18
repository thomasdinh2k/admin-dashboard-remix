import AccountToggle from './AccountToggle';
import { SearchBar } from './SearchBar';
import Plan from './Plan';
import RouteSelect from './RouteSelect';


const Sidebar = () => {
  /* Height of the panel will be:
    panelHeight = screen full height - top plan toggle - global top/bottom padding
                = 100vh - 12rem - (4rem * 2) 
    */
	const panelHeight = `h-[calc(100vh-48px-32px)]`;

	return (
		<div>
			<div
				className={
					"overflow-y-scroll sticky top-4 " + panelHeight
				}
			>
				<AccountToggle />
				<SearchBar />
				<RouteSelect />
			</div>

			<Plan />
		</div>
	);
}

export default Sidebar
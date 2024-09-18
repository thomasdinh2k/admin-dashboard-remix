import { FiCommand, FiSearch } from "react-icons/fi";
import CommandMenu from "../CommandMenu";
import { useState, useEffect } from "react";

export const SearchBar = () => {
	const [open, setOpen] = useState(false);
	// Toggle the menu when ⌘K is pressed
	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<>
			<div className="bg-stone-200 mb-4 mr-1 relative rounded flex items-center px-2 py-1.5 text-sm">
				<FiSearch className="mr-2" />
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search"
					onFocus={(e) => {
						e.target.blur();
						setOpen(true);
					}}
					className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
				/>

				<span className="p-1 text-xs flex gap-0.5 items-center shadow bg-stone-50 rounded absolute right-1.5 ">
					<FiCommand />K
				</span>
			</div>
			<CommandMenu open={open} setOpen={setOpen} />
		</>
	);
};

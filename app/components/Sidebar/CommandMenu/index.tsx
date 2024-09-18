/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import { Command } from "cmdk";
import { FiEye, FiLink, FiLogOut, FiPhoneCall, FiPlus } from "react-icons/fi";

const CommandMenu = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
	const [inputValue, setInputValue] = useState<string | undefined>(undefined);

	return (
		<Command.Dialog
			open={open}
			onOpenChange={setOpen}
			label="Global Command Menu"
			className="fixed inset-0 bg-stone-950/50"
			onClick={() => {
				setOpen(false);
			}}
		>
			{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
			<div
				className="mt-12 bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto"
				onClick={(e) => e.stopPropagation()}
			>
				<Command.Input
					placeholder="What do you want to find?"
					className="relative border-b border-stone-300 p-3 text-lg w-full placeholder: text-stone-400 focus:outline-none"
					onValueChange={setInputValue}
				/>
				<Command.List className="p-3">
					<Command.Empty>
						No result found for{" "}
						<span className="text-violet-500 font-bold">
							&#34;{inputValue}&#34;
						</span>
					</Command.Empty>

					<Command.Group
						heading="Team"
						className="text-sm mb-3 text-stone-400"
					>
						<Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
							<FiPlus />
							Invite Team Member
						</Command.Item>

						<Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
							<FiEye />
							See Organization Chart
						</Command.Item>
					</Command.Group>

					<Command.Group
						heading="Intergration"
						className="text-sm mb-3 text-stone-400"
					>
						<Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
							<FiLink />
							Link Services
						</Command.Item>

						<Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
							<FiPhoneCall />
							Contact Support
						</Command.Item>
					</Command.Group>

					<Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-50 bg-stone-950 hover:bg-stone-700 rounded items-center gap-2">
						<FiLogOut/>
						Logout
					</Command.Item>

				</Command.List>
			</div>
		</Command.Dialog>
	);
};

export default CommandMenu;

import React, { FC } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface AccountToggleProps {

}

const AccountToggle: FC<AccountToggleProps> = () : React.JSX.Element => {

    return (
		<div className="border-b mb-4 mt-2 pb-4 border-stone-300">
			<button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
				<img
					className="size-8 rounded shrink-0 bg-gray-600 shadow"
					src="https://api.dicebear.com/9.x/lorelei/svg"
					alt="avatar"
				/>

				<div className="text-start">
					<span className="text-sm font-bold block text-nowrap overflow-hidden">
						Dinh Ng. Son Tung
					</span>
					<span className="text-xs block text-stone-500">
						Thomas Dinh
					</span>
				</div>

				<FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs" />
				<FiChevronUp className="absolute right-2 top-1/2 text-xs  translate-y-[calc(-50%-4px)]" />
			</button>
		</div>
	);
};

export default AccountToggle;
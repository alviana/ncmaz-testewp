import { FC } from 'react'

export interface CheckboxProps {
	label?: string
	subLabel?: string
	name: string
}

const Checkbox: FC<CheckboxProps> = ({ subLabel = '', label = '', name }) => {
	return (
		<div className="flex items-start">
			<div className="flex h-5 items-center">
				<input
					id={name}
					name={name}
					type="checkbox"
					className="focus:ring-action-primary text-primary border-primary h-4 w-4"
				/>
			</div>
			{label && (
				<div className="ml-3 text-sm">
					<label
						htmlFor={name}
						className="text-paragraph-small text-black dark:text-white"
					>
						{label}
					</label>
					{subLabel && <p className="text-neutral-500">{subLabel}</p>}
				</div>
			)}
		</div>
	)
}

export default Checkbox

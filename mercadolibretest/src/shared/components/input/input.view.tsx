import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
	return (
		<div className="flex flex-col gap-1">
			{label && <label className="text-sm font-medium">{label}</label>}
			<input
				className={`border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
					error ? "border-red-500" : "border-gray-300"
				} ${className}`}
				{...props}
			/>
			{error && <span className="text-xs text-red-500">{error}</span>}
		</div>
	);
};

export default Input;

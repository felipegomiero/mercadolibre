import * as Styled from "./select.styled";

interface SelectOption<T> {
	label: string;
	value: T;
}

interface SelectProps<T extends string | number> {
	options: SelectOption<T>[];
	value: T;
	onChange: (value: T) => void;
	label?: string;
	disabled?: boolean;
	className?: string;
}

const Select = <T extends string | number>({
	options,
	value,
	onChange,
	label,
	disabled = false,
	className,
}: SelectProps<T>): ReturnType<React.FC<SelectProps<T>>> => {
	return (
		<Styled.Wrapper className={className}>
			{label && <label>{label}:</label>}
			<Styled.Select
				value={value}
				onChange={(e) => onChange(e.target.value as T)}
				disabled={disabled}>
				{options.map((option) => (
					<Styled.Option key={option.value.toString()} value={option.value}>
						{option.label}
					</Styled.Option>
				))}
			</Styled.Select>
		</Styled.Wrapper>
	);
};

export default Select;

import { useDispatch } from "react-redux";
import { handleChange } from "./loginSlice";

function Input({ name, value, label }) {
	const dispatch = useDispatch();

	return (
		<div className="form-group">
			<input
				type="text"
				name={name}
				value={value}
				onChange={() => dispatch(handleChange({ name, value }))}
			/>
			<div className="label">{label}</div>
		</div>
	);
}
export default Input;

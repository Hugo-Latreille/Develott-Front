import { useDispatch } from "react-redux";
import { handleChange } from "../../pages/Login/loginSlice";

function Input({ name, value, label }) {
	const dispatch = useDispatch();

	return (
		<div className="form-group">
			<input
				type="text"
				name={name}
				value={value}
				onChange={(e) =>
					dispatch(handleChange({ name, value: e.target.value }))
				}
			/>
			<div className="label">{label}</div>
		</div>
	);
}
export default Input;

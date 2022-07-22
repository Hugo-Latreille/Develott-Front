import { useDispatch } from "react-redux";
import { handleChange } from "../../pages/Login/authSlice";
//! TODO : ajouter PropTypes

function Input({ name, value, label, type, required }) {
	const dispatch = useDispatch();

	return (
		<div className="form-group">
			<input
				type={type}
				name={name}
				value={value}
				required={required}
				onChange={(e) =>
					dispatch(handleChange({ name, value: e.target.value }))
				}
			/>
			<div className="label">{label}</div>
		</div>
	);
}
export default Input;

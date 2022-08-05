import "./inputProject.scss";
import { useDispatch } from "react-redux";
import { handleChange } from "../../pages/Project/createProjectSlice";
//? Date picker MUI
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";

function InputProject({ name, value, label }) {
	const dispatch = useDispatch();

	return (
		<div className="form-group-project">
			<div className="form-group-project-label">{label}</div>
			{name === "start_date" ? (
				<LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="fr">
					<DatePicker
						disablePast
						label="Date de début"
						value={value}
						onChange={(newValue) =>
							dispatch(handleChange({ name, value: newValue._d }))
						}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
			) : name === "end_date" ? (
				<LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="fr">
					<DatePicker
						disablePast
						label="Date de fin"
						value={value}
						onChange={(newValue) =>
							dispatch(handleChange({ name, value: newValue._d }))
						}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
			) : (
				<input
					type="text"
					name={name}
					value={value}
					className="form-group-project-input"
					onChange={(e) =>
						dispatch(handleChange({ name, value: e.target.value }))
					}
				/>
			)}
		</div>
	);
}
export default InputProject;

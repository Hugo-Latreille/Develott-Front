import "./inputProject.scss";
import { useDispatch } from "react-redux";
import { handleChange } from "../../pages/Project/createProjectSlice";
import Box from "@mui/material/Box";
//? Date picker MUI
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";

function InputProject({ name, value, label }) {
  const dispatch = useDispatch();

  return (
    <div className="pick-group-project">
      <div className="pick-group-project-label">{label}</div>
      {name === "start_date" ? (
        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="fr">
          <DatePicker
            label="Date de début"
            value={value}
            onChange={(newValue) =>
              dispatch(handleChange({ name, value: newValue._d }))
            }
            // renderInput={(params) => <TextField {...params} />}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input ref={inputRef} {...inputProps} />
                {InputProps?.endAdornment}
              </Box>
            )}
          />
        </LocalizationProvider>
      ) : name === "end_date" ? (
        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="fr">
          <DatePicker
            label="Date de fin"
            value={value}
            onChange={(newValue) =>
              dispatch(handleChange({ name, value: newValue._d }))
            }
            // renderInput={(params) => <TextField {...params} />}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input ref={inputRef} {...inputProps} />
                {InputProps?.endAdornment}
              </Box>
            )}
          />
        </LocalizationProvider>
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          className="pick-group-project-input"
          onChange={(e) =>
            dispatch(handleChange({ name, value: e.target.value }))
          }
        />
      )}
    </div>
  );
}
export default InputProject;

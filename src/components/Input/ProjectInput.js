import "./inputProject.scss";

import { useDispatch } from "react-redux";
import { handleChange } from "./../../pages/Login/authSlice";

function InputProject({ name, value, label }) {
  const dispatch = useDispatch();

  return (
    <div className="form-group-project">
      <div className="form-group-project-label">{label}</div>
      <input
        type="text"
        name={name}
        value={value}
        className="form-group-project-input"
        onChange={(e) =>
          dispatch(handleChange({ name, value: e.target.value }))
        }
      />
    </div>
  );
}
export default InputProject;

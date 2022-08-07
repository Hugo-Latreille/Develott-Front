import { useDispatch } from "react-redux";
import { handleChange, setPasswordValidity } from "../../pages/Login/authSlice";

function Input({ name, value, label, type, required }) {
  const dispatch = useDispatch();

  return (
    <div className="form-group">
      {name === "password" ? (
        <>
          <input
            type={type}
            name={name}
            value={value}
            required={required}
            onChange={(e) => {
              dispatch(handleChange({ name, value: e.target.value }));
              dispatch(setPasswordValidity());
            }}
            onFocus={() => {
              dispatch(handleChange({ name: "passwordFocus", value: true }));
            }}
            onBlur={() => {
              dispatch(handleChange({ name: "passwordFocus", value: false }));
            }}
          />
          <div className="label">{label}</div>
        </>
      ) : (
        <>
          <input
            type={type}
            name={name}
            value={value}
            required={required}
            onChange={(e) =>
              dispatch(handleChange({ name, value: e.target.value }))
            }
          />
          <div className="label">{label}</div>{" "}
        </>
      )}
    </div>
  );
}
export default Input;

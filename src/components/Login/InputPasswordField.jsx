import React, { useState } from "react";

const InputPasswordField = ({
  placeholder,
  name,
  value,
  handleOnChangeInput,
}) => {
  const [isHide, setIsHide] = useState(true);

  function clickHandler() {
    setIsHide((flag) => !flag);
  }
  return (
    <span className="input-with-show-btn">
      <input
        className="form-field"
        placeholder={placeholder}
        type={isHide ? "password" : "text"}
        name={name}
        value={value}
        required
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        onChange={handleOnChangeInput}
      />
      <span className="err-msg">
        🚩 Passwords may contain at least one uppercase letter (A-Z),one
        lowercase letter (a-z), numbers (0-9) and a special character (@).
      </span>
      <button
        type="button"
        className="show-btn"
        onClick={clickHandler}
        tabIndex="-1"
      >
        {isHide ? "Show" : "Hide"}
      </button>
    </span>
  );
};

export default InputPasswordField;

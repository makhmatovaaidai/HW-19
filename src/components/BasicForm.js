import { useState } from "react";
// import { version } from "react/cjs/react.production.min";

const defaultValue = {
  name: "",
  nameValid: true,
  password: "",
  passwordValid: true,
  email: "",
  emailValid: true,
};

const BasicForm = (props) => {
  const [userForm, setUserForm] = useState(defaultValue);

  const changeUserFormHandler = (key, valid) => {
    return (e) => {
      setUserForm((prevState) => {
        return {
          ...prevState,
          [key]: e.target.value,
        };
      });
      setUserForm((prevState) => ({ ...prevState, [valid]: true }));
      if (
        userForm[key].trim().length < 6 &&
        !userForm.email.trim().includes("@")
      ) {
        setUserForm((prevState) => {
          return {
            ...prevState,
            [valid]: false,
          };
        });
      }
    };
  };
  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={userForm.name}
            onChange={changeUserFormHandler("name", "nameValid")}
          />
          {!userForm.nameValid && <p className="error-text">Requeired</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            id="name"
            value={userForm.password}
            onChange={changeUserFormHandler("password", "passwordValid")}
          />
          {!userForm.passwordValid && (
            <p className="error-text">Password should be 8</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={userForm.email}
          onChange={changeUserFormHandler("email", "emailValid")}
        />
        {!userForm.emailValid && <p className="error-text">Requeired</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

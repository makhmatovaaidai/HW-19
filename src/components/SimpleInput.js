import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [nameIsValid, setNameIsValid] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    setNameIsValid(true);

    nameInputRef.current.value = "";
  };

  const onBlurHandler = () => {
    const enteredName = nameInputRef.current.value;
    setNameIsValid(true);

    if (enteredName.trim() === "" ) {
      setNameIsValid(false);
      return;
    }
  };
  const nameInputClasses = nameIsValid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onBlur={onBlurHandler}
        />
        {!nameIsValid && <p>Input not Defaunt</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

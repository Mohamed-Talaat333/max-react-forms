import { useRef, useState } from "react";

const SimpleInput = () => {
  const nameInputRef = useRef();
  const [nameInputValue, setNameInputValue] = useState("");

  const nameInputChangeHandler = (event) => {
    setNameInputValue(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const nameInputValueSet = event.target.name.value;
    setNameInputValue(nameInputValueSet);
    console.log(nameInputRef.current.value);

    setNameInputValue("");
    // nameInputRef.current.value="";
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" ref={nameInputRef} onChange={nameInputChangeHandler} value={nameInputValue} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

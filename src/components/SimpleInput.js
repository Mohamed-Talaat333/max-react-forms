import { useState } from "react";

const SimpleInput = () => {
  const [nameInputValue, setNameInputValue] = useState("");

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const nameInputValueSet = event.target.name.value;
    await setNameInputValue(nameInputValueSet);
    console.log(nameInputValue);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' name="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

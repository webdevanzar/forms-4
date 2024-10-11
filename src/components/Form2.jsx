import React, { useState } from "react";
import "./Form2.css";

const Form = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    gender: "",
    js: "",
    css: "",
    html: "",
    php: "",
    date: "",
    country: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //validation......
  const validate = () => {
    let errors = {};

    //Name validation....
    if (!formFields.name.trim()) {
      errors.name = "Name is required.";
    } else if (formFields.name.length < 3) {
      errors.name = "Too short..";
    }

    //Email validation....
    if (!formFields.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formFields.email)) {
      errors.email = "Email is invalide.";
    }

    setFormErrors(errors);

    // If there are no errors, return true, else false
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //validate form before submission
    if (validate()) {
      console.log("Form submitted successfully", formFields);
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div className="form-body">
      <h2>Form-2</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">First Name :</label>
          <br />
          <input
            type="text"
            name="name"
            className="input-box"
            onChange={(e) => {
                handleChange(e);
                validate(e);
              }}
          />
          {formErrors.name && <span> {formErrors.name} </span>}
        </div>
        <br />
        <div>
          <label htmlFor="">Email :</label>
          <br />
          <input
            type="text"
            name="email"
            className="input-box"
            onChange={(e) => {
                handleChange(e);
                validate(e);
              }}
          />
          {formErrors.email && <span> {formErrors.email} </span>}
        </div>
        <br />
        <div>
          <label htmlFor="">Gender :</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            required
          />
          <label htmlFor="">Male</label> <br />
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            required
          />
          <label htmlFor="">Female</label>
        </div>
        <br />
        <div>
          <label htmlFor="">Skills :</label>
          <br />

          <input
            type="checkbox"
            name="js"
            value="java-script"
            onChange={handleChange}
          />
          <label htmlFor="">Java Script</label>
          <br />

          <input
            type="checkbox"
            name="css"
            value="css"
            onChange={handleChange}
          />
          <label htmlFor="">Css</label>
          <br />

          <input
            type="checkbox"
            name="html"
            value="html"
            onChange={handleChange}
          />
          <label htmlFor="">Html</label>
          <br />

          <input
            type="checkbox"
            name="php"
            value="php"
            onChange={handleChange}
          />
          <label htmlFor="">Php</label>
          <br />
        </div>
        <br />
        <div>
          <label htmlFor="">Birthdate:</label>
          <input type="date" name="date" onChange={handleChange} required />
        </div>
        <br />
        <div>
          <label htmlFor="">Countries :</label>
          <select name="country" id="" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="india">India</option>
            <option value="uae">Uae</option>
            <option value="qatar">Qatar</option>
          </select>
        </div>
        <br />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
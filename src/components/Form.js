import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        breed: "",
        age: "",

    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name </label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}  className="labelText"/>
            
            <label>Animal </label>
            <input type="text" name="type" value={formData.type} onChange={handleChange} className="labelType" />
            
            <label>Pet breed </label>
            <input type="text" name="breed" value={formData.breed} onChange={handleChange} className="labelBreed" />

            <label>Pet age </label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} className="labelAge" />
            
            <input type="submit" value="Submit" className="btnSubmit"/>
        </form>
    );
}

export default Form;
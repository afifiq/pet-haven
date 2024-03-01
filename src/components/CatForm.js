import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
        breed: "",

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
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="labelText" />

            <label>Address </label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} className="labelText" />

            <label>Phone </label>
            <input type="number" name="phone" value={formData.phone} onChange={handleChange} className="labelText" />

            <label>Email </label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="labelText" />

            <label>Cat Breed </label>
            <input type="text" name="breed" value={formData.breed} onChange={handleChange} className="labelText" />

            <input type="submit" value="Adopt" className="btnAdopt" />
        </form>
    );
}

export default Form;
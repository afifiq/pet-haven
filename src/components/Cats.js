import React from "react";
import ShowCat from "./ShowCat.js";
import Form from "./CatForm.js";

const Cats = () => {
    return (
        <div className="pet-adopt">
            <h2>Pet Haven Cats</h2>
            <p>Cat adoption is a wonderful way to bring a furry friend into your home. 
                Cats are known for their independent nature and playful demeanor, making 
                them great companions for people of all ages. When adopting a cat, it's 
                important to consider their health needs. 
                <br /><br />
                Regular vet check-ups, vaccinations, 
                and a balanced diet are crucial for keeping your feline friend healthy. It's 
                also important to provide a safe and stimulating environment for your cat, 
                with plenty of toys and scratching posts. When interacting with your cat, 
                it's important to respect their boundaries and avoid behaviors that may scare 
                or harm them. 
                <br /><br />
                Despite their sometimes aloof reputation, cats are incredibly 
                affectionate creatures that form strong bonds with their owners. Their playful 
                antics and adorable meows make them a joy to have around the house, providing 
                endless entertainment and love.</p>

                <h3>Adopt our cats, give them a home</h3>
                <Form/>
                <ShowCat />
        </div>
    );
};

export default Cats;

import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowDog = () => {
    const [loading, setLoading] = useState(true);
    const [dogs, setDogs] = useState([]);

    const webURL = "https://api.thedogapi.com/v1/images/search?limit=10";

    useEffect(() => {
        axios
            .get(webURL)
            .then((response) => {
                setDogs(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    console.log("Got the data", dogs);

    return (
        <div className="grid-container">
            {dogs.map((dog) => (
                <div key={dog.id} className="card">
                    <img className="card-img" src={dog.url} alt="dog img" />
                    <div className="card-body"></div>
                </div>
            ))}
        </div>
    );
};

export default ShowDog;

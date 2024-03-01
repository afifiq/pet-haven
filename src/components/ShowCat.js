import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowCat = () => {
    const [loading, setLoading] = useState(true);
    const [cats, setCats] = useState([]);

    const webURL = "https://api.thecatapi.com/v1/images/search?limit=10";

    useEffect(() => {
        axios
            .get(webURL)
            .then((response) => {
                setCats(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    console.log("Got the data", cats);

    return (
        <div className="grid-container">
            {cats.map((cat) => (
                <div key={cat.id} className="card">
                    <img className="card-img" src={cat.url} alt="cat img" />
                    <div className="card-body"></div>
                </div>
            ))}
        </div>
    );
};

export default ShowCat;

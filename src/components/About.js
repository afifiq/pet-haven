import React from "react";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-banner">
                <img src="../images/aboutbanner.jpg" alt=""></img>
            </div>
            <h1 className="about-title">Pet Haven</h1>
            <p className="about-text">
                Pet Haven is dedicated to finding loving homes for dogs and cats in
                need. Our goal is to provide a safe and nurturing environment for every
                pet that comes through our doors. <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus enim ligula, elementum id dolor non, tempus consequat lorem. Maecenas rutrum nunc 
                dictum dolor sagittis bibendum. Integer ultrices felis ac nibh rutrum maximus lobortis vitae 
                nibh. Mauris consectetur risus non efficitur finibus. Duis posuere euismod dignissim.
            </p>

           {/* Goals and Ambition section */}
            <div className="about-goals">
                <img src="../images/goals.png" alt=""></img>
            
                <h3 className="goals-header">Our Goals and Ambitions</h3>
                <p className="goals-text">At Pet Haven, we aim to</p>
                <ul className="goals-list">
                    <li>Rescue and rehabilitate abandoned and neglected animals.</li>
                    <li>
                        Match pets with compatible adopters to ensure lifelong companionship.
                    </li>
                    <li>Educate the community about responsible pet ownership.</li>
                    <li>
                        Advocate for animal welfare and promote adoption over buying pets.
                    </li>
                </ul>
            </div>

            
        </div>
    );
};

export default About;

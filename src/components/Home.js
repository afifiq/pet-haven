import React from "react";
import Form from "./Form";
import Video from "./Video"

const Home = () => {

  return (
    <div>
      {/* Facilities section */}
      <div className="home-facilities">
        <img src="../images/pet-store.png" alt=""></img>

        <h3 className="facilities-header">Facilities and Environment</h3>
        <p className="facilities-text">Our facilities include</p>
        <ul className="facilities-list">
          <li>Spacious kennels and catteries with comfortable bedding.</li>
          <li>Secure outdoor areas for exercise and playtime.</li>
          <li>Medical facilities for routine care and emergency treatment.</li>
          <li>Qualified staff and volunteers to provide love and attention to every pet.
          </li>
        </ul>
      </div>
     
      {/* Video section */}

      <div className="video">
        <h1>Don't buy, Adopt!</h1>
        <Video />
      </div>
      
      {/* Pet information section */}
      <div className="home-petinfo">
        <h3 className="info-header">Pet Information</h3>
        <p className="info-text">
          We have a variety of dogs and cats available for adoption, each with
          their own unique personality and story. All our pets are:
        </p>
        <ul className="info-list">
          <li>Vaccinated, spayed, or neutered.</li>
          <li>Microchipped for identification purposes.</li>
          <li>Health-checked by our veterinarians.</li>
          <li>
            Given basic training and socialization to prepare them for their new
            homes.
          </li>
        </ul>
        <div className="pet-info">
          <p>Join us in making a difference in the lives of these wonderful animals. Adopt, don't shop!</p>
          <img src="../images/pet-info.png" alt=""></img>
        </div>
      </div>

      {/* Pet release section */}
      <div className="pet-release">
        <h3 className="release-header">Pet Release</h3>
        <p className="release-text">Intend to release your pet? Do it ethically and fill up the form below</p>
        <Form />
      </div>
  
    </div>
  );
};

export default Home;

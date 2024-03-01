import React from "react";
import ShowDog from "./ShowDog";
import Form from "./DogForm.js";

const Dogs = () => {
    return (
        <div className="pet-adopt">
            <h2>Pet Haven Dogs</h2>
            <p>Dog adoption is a rewarding experience that can bring immense joy and companionship to your life. 
                Dogs are known for their loyalty and love, making them wonderful additions to any family. 
                When adopting a dog, it's important to consider their health needs. Regular exercise, a balanced diet, 
                and regular vet check-ups are essential for keeping your canine companion healthy and happy. <br /><br />
                Providing a loving and safe environment for your dog is key, with plenty of opportunities for play and 
                socialization. When interacting with your dog, it's important to be patient and understanding, as they 
                may have come from a difficult past. Dogs thrive on love and positive reinforcement, so it's important 
                to avoid harsh punishments and instead focus on positive training techniques. 
                <br /><br />
                Despite their size and sometimes intimidating appearance, dogs are incredibly cute and affectionate animals. 
                Their wagging tails and eager smiles are sure to melt your heart. Adopting a dog from Pet Haven is a great 
                choice because you'll be giving a loving home to a dog in need. Pet Haven provides a safe and nurturing 
                environment for animals, ensuring they are well-cared for and ready for their forever homes. By adopting 
                from Pet Haven, you'll not only be gaining a loyal companion but also be supporting a worthy cause.</p>

            <h3>Adopt our Dogs, give them a home</h3>
            <Form />
            <ShowDog />
        </div>
    );
};

export default Dogs;
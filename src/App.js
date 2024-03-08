// Importing css styling for App.js
import { useState } from "react";
import "./App.css";

// Importing custom components
import Allergen from "./components/Allergen/Allergen";

// App component
function App() {
  // Creating state for the allergens array.
  const [allergens, setAllergens] = useState([
    { name: "Ash", imageUrl: "./images/spore-1.jpeg", level: "" },
    { name: "Cedar", imageUrl: "./images/spore-2.jpeg", level: "" },
    { name: "Elm", imageUrl: "./images/spore-3.jpeg", level: "" },
    { name: "Grass", imageUrl: "./images/spore-4.jpeg", level: "" },
    { name: "Marsh Elder", imageUrl: "./images/spore-5.jpeg", level: "" },
    { name: "Mesquite", imageUrl: "./images/spore-6.jpeg", level: "" },
    { name: "Mold", imageUrl: "./images/spore-7.jpeg", level: "" },
    { name: "Mulberry", imageUrl: "./images/spore-8.jpeg", level: "" },
    { name: "Oak", imageUrl: "./images/spore-9.jpeg", level: "" },
    { name: "Pigweed", imageUrl: "./images/spore-10.jpeg", level: "" },
    { name: "Ragweed", imageUrl: "./images/spore-11.jpeg", level: "" },
    { name: "Willow", imageUrl: "./images/spore-12.jpeg", level: "" },
  ]);


  
  return (
    <div className="container-main container-grid">
      <h1 className="container-title grid-item happy-monkey-regular ">
        Pollen Pal
      </h1>

      <div className="container-image grid-item happy-monkey-regular">
        <div
          style={{ marginTop: "20px", marginLeft: "50px", marginRight: "50px" }}
        >
          Hello Austin Allergy Sufferers! Allergies acting up? No worries -
          we've got you covered! Let's navigate the daily pollen struggle
          together!
        </div>
      </div>

      <div className="container-allergens grid-item">
        {allergens.map((allergen) => (
          <Allergen
            imageUrl={allergen.imageUrl}
            allergenName={allergen.name}
            level="High"
          />
        ))}
      </div>
    </div>
  );
}

export default App;

// Importing css styling for App.js
import { useState, useEffect } from "react";
import "./App.css";

// Importing custom components
import Allergen from "./components/Allergen/Allergen";

// Importing dependencies. Because it's a node module, the system knows to look in the nodes module directory.
import axios from "axios";

// App component
function App() {
  // Creating state for the allergens array.
  const [allergens, setAllergens] = useState([
    {
      code: "MAPLE",
      name: "Maple",
      imageUrl: "./images/spore-1.jpeg",
      level: "",
    },
    {
      code: "ELM",
      name: "Elm",
      imageUrl: "./images/spore-2.jpeg",
      level: "",
    },
    {
      code: "COTTONWOOD",
      name: "Cottonwood",
      imageUrl: "./images/spore-3.jpeg",
      level: "",
    },
    {
      code: "ALDER",
      name: "Alder",
      imageUrl: "./images/spore-4.jpeg",
      level: "",
    },
    {
      code: "BIRCH",
      name: "Birch",
      imageUrl: "./images/spore-5.jpeg",
      level: "",
    },
    { code: "ASH", name: "Ash", imageUrl: "./images/spore-6.jpeg", level: "" },
    {
      code: "PINE",
      name: "Pine",
      imageUrl: "./images/spore-7.jpeg",
      level: "",
    },
    { code: "OAK", name: "Oak", imageUrl: "./images/spore-8.jpeg", level: "" },
    {
      code: "JUNIPER",
      name: "Juniper",
      imageUrl: "./images/spore-9.jpeg",
      level: "",
    },
    {
      code: "GRAMINALES",
      name: "Graminales",
      imageUrl: "./images/spore-10.jpeg",
      level: "",
    },
    {
      code: "RAGWEED",
      name: "Ragweed",
      imageUrl: "./images/spore-11.jpeg",
      level: "",
    },
  ]);

  // Fetching the pollen data from the API. It will return a promise, once it resolves, it will invoke the function in the .then method. If an error occurs at any point, it will be handled in the .catch.
  function fetchAllergenData() {
    axios
      .get(
        "https://pollen.googleapis.com/v1/forecast:lookup?key=AIzaSyD2hg2v6HquQrTsx6gT6ed4l3fZFBCO8JY&location.latitude=30.274775477446575&location.longitude=-97.74041801315691&days=1"
      )
      .then((response) => {
        // get the allergen data from the API reponse object
        const apiAllergens = response.data.dailyInfo[0].plantInfo;
  
        /*
         * for every allergen in our state, merge it with the corresponding allegen data from the API
         * since we're using the map method, it will create a new array with the updated data
         */
        const mergedAllergens = allergens.map((allergen) => {
          // find the corresponding allergen from the API based on the allergen code
          let foundApiAllergen = apiAllergens.find(
            (apiAllergen) => apiAllergen.code === allergen.code
          );

          let allergenLevel = foundApiAllergen?.indexInfo?.category ?? 'Unknown';
  
          // create a new object representing this allergen and map it to the new array
          return { 
            ...allergen, 
            level: allergenLevel
          };
        });

        console.log('State', allergens);
        console.log('API', apiAllergens);
        console.log('Merged', mergedAllergens);
  
        // finally, update the state with our merged allergen data
        setAllergens(mergedAllergens);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(fetchAllergenData, []);

  return (
    <div className="container-main container-grid">
      <h1 className="container-title grid-item happy-monkey-regular ">
        Pollen Pal
      </h1>

      <div className="container-image grid-item happy-monkey-regular">
        <div
          style={{ marginTop: "30px", marginLeft: "50px", marginRight: "50px" }}
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
            level={allergen.level}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

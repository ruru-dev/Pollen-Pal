import "./Allergen.css";

export default function ({ imageUrl, allergenName, level }) {
  return (
    <div className="container-allergen happy-monkey-regular">
      <img className="allergen-image" src={imageUrl} />
      <div className="allergen-name"><div>{allergenName}</div></div>
      <div className="allergen-level">{level}</div>
    </div>
  );
}

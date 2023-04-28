import React from "react";
import background1 from "../assets/imgBackgrounds/card1.png";
import background2 from "../assets/imgBackgrounds/card2.png";
import { usePackStore } from "../store/packStore";

const Backgrounds = () => {
  const backgrounds = [
    { genero: "Sci-fi", color: "btn btn-outline-success" },
    { genero: "Love", color: "btn-outline-secondary" },
    { genero: "Sport", color: "btn-outline-info" },
    { genero: "Thriller", color: "btn-outline-warning" },
    { genero: "Horror", color: "btn-outline-dark" },
    { genero: "Documental", color: "btn-outline-light" },
  ];
  const { handleStatePackBackground } = usePackStore();
  //const { handleStatePackCategory } = usePackStore();
  const handleBackgroundByOption = (e) => {
    console.log(e.target.value);
    handleStatePackBackground(e.target.value);
  };
  return (
    <div className="form-group">
      <label htmlFor="background" className="form-label mt-4">
        Backgrounds
      </label>
      <select
        name="category"
        className="form-control "
        onChange={handleBackgroundByOption}
      >
        {backgrounds
          ? backgrounds.map((i) => {
              return <option key={i.name}>{i.name}</option>;
            })
          : console.log("nada")}
      </select>
    </div>
  );
};

export default Backgrounds;

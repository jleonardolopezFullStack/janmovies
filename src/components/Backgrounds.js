import React from "react";
import background1 from "../assets/imgBackgrounds/card1.png";
import background2 from "../assets/imgBackgrounds/card2.png";
import { usePackStore } from "../store/packStore";

const Backgrounds = () => {
  const backgrounds = [
    { name: "Background1", src: background1 },
    { name: "Background2", src: background2 },
    { name: "Background3", src: background2 },
    { name: "Background4", src: background2 },
    { name: "Background5", src: background2 },
    { name: "Background6", src: background2 },
    { name: "Background7", src: background2 },
    { name: "Background8", src: background2 },
    { name: "Background9", src: background2 },
    { name: "Background10", src: background2 },
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

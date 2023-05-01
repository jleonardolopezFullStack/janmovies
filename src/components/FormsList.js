import React from "react";
import "../styles/formsList.css";
import CardCategory from "./CardCategory";
import CardPacks from "./CardPacks";
import CardProduct from "./CardProduct";

const FormsList = () => {
  return (
    <div className="formList">
      <CardPacks />

      <CardCategory />
      <CardProduct />
    </div>
  );
};

export default FormsList;

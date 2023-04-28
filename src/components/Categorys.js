import React, { useEffect, useState } from "react";
import * as videoService from "../services/loginServices.js";
import { useCategoryStore } from "../store/categoryStore.js";
import { usePackStore } from "../store/packStore.js";

const Categorys = () => {
  const [category, setcategory] = useState([]);
  const [categorySelected, setCategorySelected] = useState({ name: "" });
  /*   const { stateCategory } = useCategoryStore((state) => ({
    stateCategory: state.stateCategory,
  })); */
  const { hanldeStateCategory } = useCategoryStore();
  const { handleStatePackCategory } = usePackStore();

  //console.log(category);
  const getCategory = async () => {
    const res = await videoService.getCategorysService();
    setcategory(res.data.categorys[1]);
    //console.log(res.data.categorys[1]);
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleCategoryByOption = (e) => {
    setCategorySelected({ name: e.target.value });
    hanldeStateCategory({ name: e.target.value });
    handleStatePackCategory(e.target.value);
  };
  //console.log(stateCategory);
  const stateGeneralPack = {};
  const handleGeneralStatePack = (value) => {};

  return (
    <div className="form-group">
      <label htmlFor="category" className="form-label mt-4">
        Category
      </label>
      <select
        name="category"
        className="form-control"
        onChange={handleCategoryByOption}
      >
        {category
          ? category.map((i) => {
              return <option key={i._id}>{i.name}</option>;
            })
          : console.log("nada")}
      </select>
    </div>
  );
};

export default Categorys;

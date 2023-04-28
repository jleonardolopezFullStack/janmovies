import React, { useState } from "react";
import * as videoService from "../services/loginServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Categorys from "./Categorys";
import { useCategoryStore } from "../store/categoryStore";

const CardCategory = () => {
  const token = localStorage.getItem("token");
  const [category, setCategory] = useState({ name: "", token: "" });

  const { stateCategory } = useCategoryStore((state) => ({
    stateCategory: state.stateCategory,
  }));

  const reload = () => {
    window.location.reload();
  };

  const handleChangeCategory = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
      token: token,
    });
  };

  const handleSubmitCategory = async () => {
    const res = await videoService.postCategoryService(category);
    res
      ? toast.success("Category have been created")
      : console.log("Something wrong, try to create a new Category again");

    setTimeout(reload, 2000);
  };

  const handleDeleteCategory = async () => {
    console.log(stateCategory.name);
    const res = await videoService.deleteCategoryService({
      name: stateCategory.name,
      token: token,
    });
    res
      ? toast.success("Category have been deleted")
      : console.log("Something wrong, try to delete a Category again");
    setTimeout(reload, 3000);
  };
  return (
    <div
      className="card border-secondary mb-3" /* style={{"max-width: 20rem"}} */
    >
      <div className="card-header">CATEGORY BOX</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Create a Category"
              name="name"
              onChange={handleChangeCategory}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleSubmitCategory}
          >
            Create Category
          </button>
        </form>
        <ToastContainer />
        <Categorys />
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleDeleteCategory}
        >
          Delete Category
        </button>
      </div>
    </div>
  );
};

export default CardCategory;

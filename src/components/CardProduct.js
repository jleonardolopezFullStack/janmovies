import React, { useState } from "react";
import * as videoService from "../services/loginServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./Products.js";
import { useProductStore } from "../store/productStore";

const CardProduct = () => {
  const token = localStorage.getItem("token");

  const [product, setProduct] = useState({ name: "", token: "" });

  const { stateProduct } = useProductStore((state) => ({
    stateProduct: state.stateProduct,
  }));

  const reload = () => {
    window.location.reload();
  };
  const handleChangeProduct = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
      token: token,
    });
  };

  const handleSubmitProduct = async () => {
    const res = await videoService.postProductService(product);
    res
      ? toast.success("Product have been created")
      : console.log("Something wrong, try to create a new product again");

    setTimeout(reload, 2000);
  };

  const handleDeleteProduct = async () => {
    const res = await videoService.deleteProductService({
      name: stateProduct.name,
      token: token,
    });
    res
      ? toast.success("Product have been delete")
      : console.log("Something wrong, try to delete a product again");
    setTimeout(reload, 3000);
  };
  return (
    <div
      className="card border-success mb-3" /* style={{"max-width: 20rem"}} */
    >
      <div className="card-header">PRODUCT BOX</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">
              Product
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Create a product"
              name="name"
              onChange={handleChangeProduct}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleSubmitProduct}
          >
            Create product
          </button>
        </form>
        <ToastContainer />
        <Products />
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleDeleteProduct}
        >
          Delete product
        </button>
      </div>
    </div>
  );
};

export default CardProduct;

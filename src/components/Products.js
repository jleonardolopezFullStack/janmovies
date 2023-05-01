import React, { useEffect, useState } from "react";
import * as videoService from "../services/loginServices.js";
import { usePackStore } from "../store/packStore.js";
import { useProductStore } from "../store/productStore";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [productSelected, setProductSelected] = useState({ name: "" });

  const { hanldeStateProduct } = useProductStore();

  const getProduct = async () => {
    const res = await videoService.getProductsService();
    setProduct(res.data.product[1]);
    //console.log(res.data.product[1]);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleProductByOption = (e) => {
    setProductSelected({ name: e.target.value });
    hanldeStateProduct({ name: e.target.value });
  };
  //console.log(productSelected);

  return (
    <div className="form-group">
      <label htmlFor="product" className="form-label mt-4">
        Product
      </label>
      <select
        name="product"
        className="form-control"
        onChange={handleProductByOption}
      >
        {product
          ? product.map((i) => {
              return <option key={i._id}>{i.name}</option>;
            })
          : console.log("nada")}
      </select>
    </div>
  );
};

export default Products;

import { useEffect, useState } from "react";
import "../styles/cardPack.css";
import * as videoService from "../services/loginServices";
//import Products from "./Products";

const CardPack = () => {
  const token = localStorage.getItem("token");
  console.log(token);

  const initialCardPackstateProducts = {};
  const [cardPackstateProducts, setcardPackstateProducts] = useState(
    initialCardPackstateProducts
  );
  //let products = [];
  const loadProducts = async () => {
    const res = await videoService.getProductsService();
    console.log(res?.data.product[1]);
    //products = res.data.product[1];

    setcardPackstateProducts(res.data.product[1]);
  };
  //console.log(products);
  useEffect(() => {
    loadProducts();
    console.log(cardPackstateProducts);
  }, []);
  //console.log(cardPackstateProducts);
  return (
    <div
      className="card border-primary mb-3" /* style={{"max-width: 20rem"}}" */
    >
      <div className="card-header">Header</div>
      <div className="card-body">
        <form className="formCardPack" /* onSubmit={handleSubmit} */>
          <div className="form-group">
            <label htmlFor="email" className="form-label mt-4">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter email"
              /* onChange={handleValueChange} */
            />
            <small className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label mt-4">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              /* onChange={handleValueChange} */
            />
          </div>
          <div className="form-group">
            <label htmlFor="product" className="form-label mt-4">
              Product
            </label>
            {/*  <Products /> */}
            {/*             <select>
              <option value="netflix">Netflix</option>
            </select> */}
          </div>
          <div className="form-group">
            <label htmlFor="price" className="form-label mt-4">
              Price
            </label>
            <input
              name="price"
              type="text"
              className="form-control"
              placeholder="Enter email"
              /* onChange={handleValueChange} */
            />
            <small className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="discount" className="form-label mt-4">
              Discount
            </label>
            <input
              name="discount"
              type="text"
              className="form-control"
              placeholder="Password"
              /* onChange={handleValueChange} */
            />
          </div>

          <button type="submit" className="btn btn-primary btn-cardPack">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardPack;

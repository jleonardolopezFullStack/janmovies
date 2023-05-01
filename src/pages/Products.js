import { useEffect, useState } from "react";
import * as videoService from "../services/loginServices";
import { usePackStore } from "../store/packStore";

const Products = () => {
  const [product, setproduct] = useState([]);

  const { handleStatePackArrayProduct } = usePackStore();
  const srcImg = require.context("../assets/imgProducts/", true);

  const loadProducts = async () => {
    const res = await videoService.getProductsService();
    //console.log(res.data.product);
    setproduct(res.data.product[1]);
  };
  useEffect(() => {
    loadProducts();
  }, []);

  const handleArrayProductsChange = (e) => {
    //console.log(e.target.name);

    handleStatePackArrayProduct(e.target.name);
  };

  //console.log(arrayProducts);
  return (
    <div className="form-group">
      <label htmlFor="product" className="form-label mt-4">
        Product
      </label>
      <ul className="ul_products">
        {product ? (
          product.map((i) => {
            return (
              <li value={i.name} key={i._id} className="list_products">
                <a>
                  <img
                    src={srcImg(`./${i.name}.png`)}
                    name={i.name}
                    onClick={handleArrayProductsChange}
                  ></img>
                </a>
              </li>
            );
          })
        ) : (
          <li value="NoProduct">No Exist Product</li>
        )}
      </ul>
    </div>
  );
};

export default Products;

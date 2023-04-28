import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as videoService from "../services/loginServices.js";
import { useCartStore } from "../store/CartStore.js";
const srcImg = require.context("../assets/imgBackgrounds/", true);
const srcImg2 = require.context("../assets/imgProducts/", true);

const CardHome = ({ category }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const { stateCart, totalPrice, totalQuantity } = useCartStore((state) => ({
    stateCart: state.stateCart,
    totalPrice: state.totalPrice,
    totalQuantity: state.totalQuantity,
  }));

  const {
    handleStateCartSummaryPrice,
    handleStateCartAddToValue,
    handleStateCartNewValue,
  } = useCartStore();

  //console.log(stateCart);
  //const [cart, setCart] = useState({});

  const handleAddCart = (item) => {
    //console.log(item);
    const data = {
      name: item.name,
      price: item.price,
      discount: item.discount,
      idStripe: item.idStripe,
    };

    const findNameCart = stateCart.find((i) => {
      if (i.name === data.name) {
        return true;
      }
    });
    if (!findNameCart) {
      handleStateCartNewValue(data);
      handleStateCartSummaryPrice();
    } else {
      const newCart = stateCart.map((i) => {
        i.name === data.name
          ? i.quantity++ &&
            handleStateCartAddToValue(i) &&
            handleStateCartSummaryPrice()
          : console.log("check in");
      });
    }
  };
  //console.log(cart);
  //console.log(stateCart);
  const [products, setProducts] = useState([]);
  // console.log("la category es:" + category);

  const findProductInCategory = async () => {
    const res = await videoService.getPackService();
    const res2 = res.data.pack[1];
    /*     const res3 = res2.map((pack) => {
      return { name: pack.name, category: pack.category.name };
    }); */
    const res3 = await res2.filter((pack) => {
      if (category === pack.category.name) {
        return {};
      }
    });

    if (res3) {
      //console.log(res3);
      setProducts(res3);
    }
  };

  const handleDeletePack = async (id) => {
    //const res = await videoService.getPackService();
    console.log("Este es el id: " + id);
    const res = await videoService.deletePackService({
      id: id,
      token: token,
    });
    findProductInCategory();
  };

  const handleNavigateContact = () => {
    navigate(`/contact`);
  };

  useEffect(() => {
    findProductInCategory();
  }, []);

  //console.log(products);
  return (
    <div className="cardHome">
      {products
        ? products.map((i) => {
            return (
              <div className="card border-primary mb-3" key={i._id}>
                <div className="header-card">
                  <div className="card-header">{i.name}</div>
                  {token ? (
                    <span
                      className="text-info"
                      onClick={() => {
                        handleDeletePack(i._id);
                      }}
                    >
                      X
                    </span>
                  ) : (
                    console.log()
                  )}
                </div>

                <div className="card-body overfloww">
                  <div className="poster">
                    <img src={srcImg(`./${i.background}.png`)} alt="" />
                  </div>
                  <div className="details">
                    <img src="logo2.png" alt="" className="logo" />
                    <h3>Directed by James Cameron</h3>
                    <div className="rating">
                      <div className="tags">
                        <span>Sci-fi</span>
                        <span>Action</span>
                      </div>
                      <div className="info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim facere, ducimus soluta praesentium laborum
                        voluptatem doloribus iste
                      </div>
                      <div className="cast">
                        <h4>Products</h4>
                        <ul>
                          {i.products.map((p) => {
                            return (
                              <li key={p}>
                                <img src={srcImg2(`./${p}.png`)} alt="" />
                              </li>
                            );
                          })}
                          {/*                          <li>
                            <img src="card1.jpg" alt="" />
                          </li>
                          <li>
                            <img src="card1.webp" alt="" />
                          </li>
                          <li>
                            <img src="card2.jfif" alt="" />
                          </li> */}
                        </ul>
                        <div className="buttons">
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={handleNavigateContact}
                          >
                            Get Info
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleAddCart(i)}
                          >
                            Items Cart {totalQuantity}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : console.log("no")}
    </div>
  );
};

export default CardHome;

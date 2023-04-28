import { useCartStore } from "../store/CartStore";

import "../styles/cart.css";

const Cart = () => {
  const mirar = useCartStore.getState().stateCart;
  //const stateNew = window.localStorage.getItem("state");
  const { stateCart, totalPrice, totalQuantity, totalDiscount } = useCartStore(
    (state) => ({
      stateCart: state.stateCart,
      totalPrice: state.totalPrice,
      totalQuantity: state.totalQuantity,
      totalDiscount: state.totalDiscount,
    })
  );

  const {
    handleStateCartdeleteAll,
    handleStateCartdeleteToValue,
    handleStateCartSummaryPrice,
    handleStateCartAddToValue,
    handleStateCartNewValue,
  } = useCartStore();

  const handleDeleteCart = () => {
    handleStateCartdeleteAll([]);
  };

  const handleDeleteOneProduct = (value) => {
    handleStateCartdeleteToValue(value);
  };

  const handleRestCart = (item) => {
    const data = {
      name: item.name,
      price: item.price,
    };

    const findNameCart = stateCart.find((i) => {
      if (i.name === data.name) {
        return true;
      }
    });
    console.log(findNameCart);
    if (findNameCart.quantity === 1) {
      handleDeleteOneProduct(item.name);
      console.log("llego a 1");
    } else {
      const newCart = stateCart.map((i) => {
        i.name === data.name
          ? i.quantity-- &&
            handleStateCartAddToValue(i) &&
            handleStateCartSummaryPrice()
          : console.log("no hola");
      });
    }
  };

  const handleAddCart = (item) => {
    console.log(item);
    const data = {
      name: item.name,
      price: item.price,
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
          : console.log("no hola");
      });
    }
  };

  const checkout = async () => {
    const url_testing =
      //"https://firststripebackend-production.up.railway.app/checkout";
      "http://localhost:5000/checkout";
    await fetch(url_testing, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: mirar }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  console.log(mirar);

  return (
    <>
      <div className="cart">
        <h1 className="titleCart">Shopping Cart</h1>
        <hr className="hr" />
        <div className="title">
          <h4>Product</h4>
          <h4>Price ea</h4>
          <h4>Quantity</h4>
          <h4>Sub total</h4>
          <h4>Delete</h4>
        </div>
        <hr className="hr" />

        {mirar
          ? mirar.map((cart) => {
              return (
                <ul className="list-group ul-cart">
                  <li className="list-group-item d-flex align-items-center liCart">
                    <span className="product-cart">{cart.name}</span>
                    <span className="badge bg-primary rounded-pill">
                      {cart.price}
                    </span>
                    <span className="badge bg-primary rounded-pill quantity-cart">
                      {cart.quantity}
                    </span>
                    <span className="badge bg-primary rounded-pill subtotal-cart">
                      {cart.price * cart.quantity}
                    </span>
                    <div className="buttons-cart">
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => handleDeleteOneProduct(cart.name)}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={() => handleAddCart(cart)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={() => handleRestCart(cart)}
                      >
                        -
                      </button>
                    </div>
                  </li>
                  <hr className="hr" />
                </ul>
              );
            })
          : console.log("Empty cart")}
      </div>
      <div class="card border-light mb-3 payment-cart ">
        <div class="card-header">TOTAL CART</div>
        <div class="card-body card-payment">
          <div className="payment-cart-total">
            <p>Subtotal</p>
            <p>$ {totalPrice}</p>
          </div>
          <div className="payment-cart-total">
            <p>Total products</p>
            <p>{totalQuantity}</p>
          </div>
          <div className="payment-cart-total">
            <p>Discount</p>
            <p>$ -{totalDiscount}</p>
          </div>
          <hr />
          <div className="payment-cart-total">
            <p>TOTAL</p>
            <p> ${totalPrice - totalDiscount}</p>
          </div>
          <button
            type="button"
            className="btn btn-dark button-buy"
            onClick={checkout}
          >
            Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;

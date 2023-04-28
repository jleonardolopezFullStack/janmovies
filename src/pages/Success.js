import { useEffect } from "react";
import { useCartStore } from "../store/CartStore";
import "../styles/success.css";

const Success = () => {
  const { handleDeleteLocalStorageCart } = useCartStore();

  useEffect(() => {
    console.log("entro");
    handleDeleteLocalStorageCart();
    //deleteLocalStorageCart();
  }, []);

  return (
    <div className="cancel">
      <div className="alert alert-dismissible alert-warning cancel-alert">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <h4 className="alert-heading">Successful Amazing Purchase!🎈🎉</h4>
        <p className="mb-0">
          Thank you for getting our product 🥰, please do not hesitates to
          contact us in case you require. 🧐
          <br />
          <a href="/" className="alert-link">
            Get back to dashboard ✈
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Success;

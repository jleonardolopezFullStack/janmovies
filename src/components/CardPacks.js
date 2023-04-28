import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "../pages/Products";
import * as videoService from "../services/loginServices";
import "../styles/cardPack.css";
import Categorys from "./Categorys";
import Background from "./Backgrounds";
import Price from "./Price";
import Discount from "./Discount";
import { usePackStore } from "../store/packStore";
import Name from "./Name";
import IdStripe from "./IdStripe";
//import NETFLIX from "../assets/imgProducts/NETFLIX2.png";

const CardPacks = () => {
  const token = localStorage.getItem("token");
  const { statePack, stateProduct } = usePackStore((state) => ({
    statePack: state.statePack,
    stateProduct: state.stateProduct,
  }));

  const data = {
    name: statePack.name,
    category: statePack.category,
    background: statePack.background,
    products: stateProduct,
    price: statePack.price,
    discount: statePack.discount,
    idStripe: statePack.idStripe,
    token: token,
  };

  const reload = () => {
    window.location.reload();
  };

  const handlePackChange = async (e) => {
    e.preventDefault();
    // const res = await videoService.getPackService();
    const res = await videoService.postPackService(data);
    console.log(res);
    res
      ? toast.success("Pack have been created")
      : console.log("Something wrong, try to create a new pack again");

    setTimeout(reload, 2000);
  };

  console.log(data);
  return (
    <div
      className="card border-primary mb-3" /* style={{"max-width: 20rem"}}" */
    >
      <div className="card-header">PACK BOX</div>
      <div className="card-body">
        <form
          className="formCardPack"
          /* onSubmit={handleSubmit} */
        >
          <Name />
          <Categorys />
          <Background />
          <Products />
          <Price />
          <Discount />
          <IdStripe />

          <button
            type="submit"
            className="btn btn-primary btn-cardPack"
            onClick={handlePackChange}
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CardPacks;

import { usePackStore } from "../store/packStore";

const IdStripe = () => {
  const { handleStatePackIdStripe } = usePackStore();
  const handleIdStripeChange = (e) => {
    handleStatePackIdStripe(e.target.value);
  };
  return (
    <div className="form-group">
      <label htmlFor="price" className="form-label mt-4">
        ID Stripe
      </label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Create a product"
          name="idStripe"
          onChange={handleIdStripeChange}
        />
      </div>
    </div>
  );
};

export default IdStripe;

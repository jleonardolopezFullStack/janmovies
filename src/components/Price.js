import { usePackStore } from "../store/packStore";

const Price = () => {
  const { handleStatePackPrice } = usePackStore();

  const handlePriceChange = (e) => {
    const changeNumber = Number(e.target.value);

    handleStatePackPrice(changeNumber);
  };
  return (
    <div className="form-group">
      <label htmlFor="price" className="form-label mt-4">
        Price
      </label>
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
          placeholder="Price in USD"
          onChange={handlePriceChange}
        />
        <span className="input-group-text">.00</span>
      </div>
    </div>
  );
};

export default Price;

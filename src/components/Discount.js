import React from "react";
import { usePackStore } from "../store/packStore";

const Discount = () => {
  const { handleStatePackDiscount } = usePackStore();

  const handleDiscountChange = (e) => {
    const changeNumber = Number(e.target.value);
    handleStatePackDiscount(changeNumber);
  };

  return (
    <div className="form-group">
      <label htmlFor="price" className="form-label mt-4">
        Discount
      </label>
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
          placeholder="Price in USD"
          onChange={handleDiscountChange}
        />
        <span className="input-group-text">.%</span>
      </div>
    </div>
  );
};

export default Discount;

import { usePackStore } from "../store/packStore";

const Name = () => {
  const { handleStatePackName } = usePackStore();
  const handleNameChange = (e) => {
    handleStatePackName(e.target.value);
  };
  return (
    <div className="form-group">
      <label htmlFor="price" className="form-label mt-4">
        Name
      </label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Create a product"
          name="name"
          onChange={handleNameChange}
        />
      </div>
    </div>
  );
};

export default Name;

import "../styles/cancel.css";

const Cancel = () => {
  return (
    <div className="cancel">
      <div className="alert alert-dismissible alert-danger cancel-alert">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <h4 className="alert-heading">Warning! 😫😤</h4>
        <p className="mb-0">
          Sorry, something went wrong with your payment😒, please try again or
          contact us for any requirement 🐱‍👤
          <br />
          <a href="/" className="alert-link">
            Get back to dashboard 🛵
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Cancel;

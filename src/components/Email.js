import React, { useState } from "react";
import * as videoService from "../services/loginServices.js";
import { ToastContainer, toast } from "react-toastify";

const Email = () => {
  const initialState = {
    name: "🐣",
    contact: "📧📞",
    msg: "😋",
  };

  // {`Hello my name is ${valor.name}, and I want to get info about your packs and promos, please feel free to contact me to ${valor.contact} `}
  const [valor, setValor] = useState(initialState);

  const handleNameChange = (e) => {
    setValor({
      ...valor,
      [e.target.name]: e.target.value,
      msg: `Hello my name is ${
        e.target.name === "name" ? e.target.value : valor.name
      }, and I want to get info about your packs and promos, please feel free to contact me to ${
        e.target.name === "contact" ? e.target.value : valor.name
      }`,
    });
  };
  // console.log(valor);
  const reload = () => {
    window.location.reload();
  };
  const handleSendEmail = async (e) => {
    e.preventDefault();
    const res = await videoService.postEmailService(valor);
    console.log(res);
    res
      ? toast.success("The 📧 have been sent")
      : console.log(
          "Something wrong, try to send again or try Whatsapp method"
        );
    setTimeout(reload, 3000);
  };

  return (
    <div className="card border-primary mb-3 contact-box">
      <div className="card-header">EMAIL</div>
      <div className="card-body">
        <form
          className="formEmailMethod"
          /* onSubmit={handleSubmit} */
        >
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your Info with anyone else.
          </small>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Name"
              name="name"
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Email or Phone"
              name="contact"
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleTextarea" className="form-label mt-4">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="3"
              name="msg"
              value={`Hello my name is ${valor.name}, and I want to get info about your packs and promos, please feel free to contact me to ${valor.contact} `}
              onProgressCapture={(e) => console.log(e)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-email"
            onClick={handleSendEmail}
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Email;

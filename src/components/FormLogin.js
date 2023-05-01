import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/formLogin.css";
import * as videoService from "../services/loginServices";

const FormLogin = () => {
  const initialState = { email: "", password: "" };
  const [login, setlogin] = useState(initialState);
  const navigate = useNavigate();

  const handleValueChange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };
  //console.log(login);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await videoService.getLoginService(login);
      //console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
      const verifyToken = localStorage.getItem("token");
      console.log(verifyToken);
      const handleNavigate = () => {
        navigate(`/forms`);
      };

      verifyToken ? handleNavigate() : navigate(`/`);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="form-label mt-4">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleValueChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="form-label mt-4">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={handleValueChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default FormLogin;

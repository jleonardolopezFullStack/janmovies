import React, { useEffect, useState } from "react";
import CardHome from "../components/CardHome.js";
import * as videoService from "../services/loginServices.js";
import "../styles/home.css";

const Home = () => {
  const [category, setCategory] = useState([]);

  const loadCategorys = async () => {
    const res = await videoService.getCategorysService();
    setCategory(res.data.categorys[1]);
  };

  useEffect(() => {
    loadCategorys();
  }, []);

  return (
    <>
      {category
        ? category.map((item) => {
            return (
              <div className="home" key={item._id}>
                <h1>{item.name}</h1>
                <div className="home2">
                  <CardHome category={item.name} />
                </div>
              </div>
            );
          })
        : console.log("Something goes wrong, try render again Home page")}
    </>
  );
};

export default Home;

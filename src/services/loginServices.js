import axios from "axios";

const API = "http://localhost:5000";
//const API = process.env.URL;
//const API2 = "http://localhost:5000/product";

export const getLoginService = async (data) => {
  return await axios.post(`${API}/login`, data);
};

export const getProductsService = async () => {
  return await axios.get(`${API}/product`);
};

export const getCategorysService = async () => {
  return await axios.get(`${API}/category`);
};

export const postCategoryService = async (data) => {
  //axios.defaults.headers.common["Authorization"] = token;
  return await axios.post(`${API}/category/${data.token}`, data);
};

export const deleteCategoryService = async (data) => {
  return await axios.delete(`${API}/category/${data.name}/${data.token}`);
};

export const postProductService = async (data) => {
  //axios.defaults.headers.common["Authorization"] = token;
  return await axios.post(`${API}/product/${data.token}`, data);
};

export const deleteProductService = async (data) => {
  return await axios.delete(`${API}/product/${data.name}/${data.token}`);
};

export const postPackService = async (data) => {
  return await axios.post(`${API}/pack/${data.token}`, data);
};
export const getPackService = async () => {
  return await axios.get(`${API}/pack`);
};
export const deletePackService = async (data) => {
  return await axios.delete(`${API}/pack/${data.id}/${data.token}`);
};

export const postEmailService = async (data) => {
  console.log(data);
  return await axios.post(`${API}/email`, data);
};

/* const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers = {
      Authorization: token,
    };
  } else {
    delete axios.defaults.headers.Authorization;
  }
};
*/

/* const headers = {
  Authorization: `Bearer aqui va el token`,
  "Content-Type": "application/json",
};

export const createVideo = async (video) => {
  return await axios.get(API, video);
}; */

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import FormsList from "./components/FormsList";
import Login from "./components/Login";
import Cancel from "./pages/Cancel";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Success from "./pages/Success";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forms" element={<FormsList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

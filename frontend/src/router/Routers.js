import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tours />} />
        <Route path="/tour:id" element={<TourDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tours/search" element={<SearchResultList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routers;

import React from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../css/header.css";

const Header = () => {
  return (
    <Container className="mt-3">
      <Row>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              <li className="nav__item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => (isActive ? "active__link" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active__link" : "")}
                >
                  About
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/tour"
                  className={({ isActive }) => (isActive ? "active__link" : "")}
                >
                  Tours
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav_right d-flex align-items-center gap-4">
            <div className="nav_btns d-flex align-items-center gap-4">
              <Button className="btn secondary__btn">
                <Link to="/login">Login</Link>
              </Button>
              <Button className="btn primary__btn">
                <Link to="/register">Register</Link>
              </Button>
            </div>
            <span className="mobile__menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Header;

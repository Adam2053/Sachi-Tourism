import React from "react";
import { Container, Row, Button, Nav } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";
import logo2 from '../../assets/images/sachilogo.png'

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  // {
  //   path: "/about",
  //   display: "none",
  // },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between ">
            {/* ________ Logo _______ */}
            <div className="logo">
              {/* <img src={logo} alt="" /> */}
              <span style={{"fontWeight":"bold", "fontSize":"2rem"}} >Sachi <span style={{"color":'#0053a3'}} >Tourism</span></span>
            </div>

            {/* ______ Menu Start _______ */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* _______ Menu End _______ */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <img style={{width:'7rem', height:'7rem', marginTop:'1rem'}} src={logo2} alt="" />
                <Button style={{display:'none'}} className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button style={{display:'none'}} className="btn primary__btn">
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
    </header>
  );
};

export default Header;

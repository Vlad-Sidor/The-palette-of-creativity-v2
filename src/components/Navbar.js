import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight, FaBorderNone, FaInstagramSquare } from "react-icons/fa";
import { TiSocialVimeo } from "react-icons/ti";
import logo from "../images/logo 0.png";
export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="ArtForSmart" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/competitions">Галерея</Link>
            </li>
            <li>
              <a className="header-phone" href="tel:+375222722893">
                +375222722893
              </a>
            </li>
            <li>
              <a className="header-email" href="mailto:studclub300@mail.ru">
                studclub300@mail.ru
              </a>
            </li>

            <button
              className="nav-icon"
              style={{
                backgroundColor: "transparent",
                width: "50px",
                height: "90%",
                border: "0",
              }}
            >
              <a
                className="nav-icon"
                href="https://www.instagram.com/bru_university"
              >
                <FaInstagramSquare className="nav-icon" />
              </a>
            </button>

            <button
              className="nav-icon"
              style={{
                backgroundColor: "transparent",
                width: "50px",
                height: "90%",
                border: "0",
              }}
            >
              <a className="nav-icon" href="https://t.me/Bru_Live">
                <TiSocialVimeo className="nav-icon" />
              </a>
            </button>
          </ul>
        </div>
      </nav>
    );
  }
}

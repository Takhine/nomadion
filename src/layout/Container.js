import React, { useState } from "react";
// Components
import { Layout, Menu, Dropdown, Button } from "antd";
import "static/styles/main.scss";
import people from "static/images/icons/people-icon.svg";
import logo from "static/images/media/logo.svg";
import darkLogo from "static/images/media/dark-logo.svg";
import heart from "static/images/media/heart.png";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
// Images
import pointer from "static/images/icons/pointer.svg";
import darkMenu from "static/images/icons/close-icon.svg";
import lightMenu from "static/images/icons/menu-icon.svg";

const { Header, Content, Footer } = Layout;

function Container(props) {
  const { pathname } = props.location;
  const [dark, setTheme] = useState(false);
  window.onscroll = () => {
    const nav = document.querySelector("#nav");
    if (window.scrollY <= 200) {
      nav.className = "dark-navbar";
      setTheme(false);
    } else {
      nav.className = "light-navbar";
      setTheme(true);
    }
  };

  const menu = (
    <Menu className="floating-menu">
      <Menu.Item>
        <NavLink exact to="/" activeClassName="selected">
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/nomadion-services" activeClassName="selected">
          Services
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/projects-by-nomadion" activeClassName="selected">
          Our Work
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          Contact
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout className="layout">
      <Header id="nav" className="dark-navbar">
        <div className="logo-container">
          <NavLink exact to="/">
            <img
              className="logo"
              style={dark ? { display: "block" } : { display: "none" }}
              src={darkLogo}
              alt="Nomadion"
            />
          </NavLink>
          <NavLink exact to="/">
            <img
              className="logo"
              style={dark ? { display: "none" } : { display: "block" }}
              src={logo}
              alt="Nomadion"
            />
          </NavLink>
        </div>
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          {dark ? (
            <Button className="menu-button">
              <img src={darkMenu} alt="Menu" />
            </Button>
          ) : (
            <Button className="menu-button">
              <img src={lightMenu} alt="Menu" />
            </Button>
          )}
        </Dropdown>

        <Menu className="nav-menu" theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <NavLink exact to="/" activeClassName="selected">
              {pathname === "/" && (
                <img className="pointer" src={pointer} alt="Nomadion Service" />
              )}
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink exact to="/nomadion-services" activeClassName="selected">
              {pathname === "/nomadion-services" && (
                <img className="pointer" src={pointer} alt="Nomadion Service" />
              )}
              Services
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink
              exact
              to="/projects-by-nomadion"
              activeClassName="selected"
            >
              {pathname === "/projects-by-nomadion" && (
                <img className="pointer" src={pointer} alt="Nomadion Service" />
              )}
              Our Work
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4" style={{ backgroundColor: "transparent" }}>
            <Button
              style={
                dark
                  ? { backgroundColor: "#030127", border: "1px solid #030127" }
                  : { fontWeight: 600 }
              }
              className="contribute-button"
            >
              <img src={people} alt="People Icon" /> Contact
            </Button>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>{props.children}</Content>
      <Footer className="footer" style={{ textAlign: "center" }}>
        Made with <img src={heart} className="heart" alt="Heart" /> by Nomadion
        © 2020
      </Footer>
    </Layout>
  );
}

export default withRouter(Container);

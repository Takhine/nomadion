import React from "react";
// Components
import Navbar from "./Navbar";
import { Layout, Menu, Button } from 'antd';
import 'static/styles/main.scss';
import people from 'static/images/icons/people-icon.svg';
import logo from 'static/images/media/logo.svg';

const { Header, Content, Footer } = Layout;

export default function Container(props) {
  return (
    <Layout className="layout" style={{background: 'unset'}}>
    <Header className="navbar" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo-container">
      <img className="logo" src={logo} alt="Contribe" />
      </div>
      <Menu className="nav-menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About Us</Menu.Item>
        <Menu.Item key="3">Our Work</Menu.Item>
        <Menu.Item key="4" style={{backgroundColor: 'transparent'}}><Button className="contribute-button"><img src={people} alt="People Icon" /> Contribute</Button></Menu.Item>
      </Menu>
    </Header>
    <Content>
      {props.children}
    </Content>
    <Footer className="footer" style={{ textAlign: 'center' }}>Made with Love by Contribe ©2020</Footer>
  </Layout>
  );
}

import React, {useState} from "react";
// Components
import { Layout, Menu, Button } from 'antd';
import 'static/styles/main.scss';
import people from 'static/images/icons/people-icon.svg';
import logo from 'static/images/media/logo.svg';
import darkLogo from 'static/images/media/dark-logo.svg';
import heart from 'static/images/media/heart.png';


const { Header, Content, Footer } = Layout;

export default function Container(props) {
  const [dark, setTheme] = useState(false)
  window.onscroll = () =>{
    const nav = document.querySelector('#nav');
    if(window.scrollY <=200) {
      nav.className="dark-navbar";
      setTheme(false);
    }
    else{
      nav.className="light-navbar"
      setTheme(true);

    }
  }
  return (
    <Layout className="layout" style={{background: 'unset'}}>
    <Header id="nav" className="dark-navbar">
      <div className="logo-container">
      <img className="logo" style={dark?{display: 'block'}:{display: 'none'}} src={darkLogo} alt="Nomadion" />
      <img className="logo" style={dark?{display: 'none'}:{display: 'block'}} src={logo} alt="Nomadion" />

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
    <Footer className="footer" style={{ textAlign: 'center' }}>Made with <img src={heart} className="heart" alt="Heart" /> by Nomadion © 2020</Footer>
  </Layout>
  );
}

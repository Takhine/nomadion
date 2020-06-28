import React from "react";
import { Button, Row, Col, Card } from "antd";
// Images
import join from "static/images/icons/join-icon.svg";
import collaborate from "static/images/icons/collaborate-icon.svg";
import launch from "static/images/icons/launch-icon.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="title-container">
        <small className="year">2019</small>
        <h1 className="main-title">Nomadian.</h1>
        <p className="slogan">A team of teams</p>
      </div>
      <div className="description-container">
        <h3 className="main-description">
          We work on seemingly independent projects that are each led by a
          dedicated group & supported by an entire community of contributors,
          driven by the desire to tap into the massive potential for good in the
          world.
        </h3>
        <div className="buttons-container">
          <Button className="join-button">Join Live Project</Button>
          <Button className="more-button">Learn More</Button>
        </div>
        <div className="steps-container">
          <Row gutter={0} className="grid-parent">
            <Col className="grid-child" xs={12} md={4}>
              <Card className="step-card">
                <img src={join} alt="Join" className="step-icon" />
                <p className="step-description">
                  <b className="step-name">Join</b>
                  We have exciting new projects tackling various domains
                </p>
              </Card>
            </Col>
            <Col className="grid-child" xs={12} md={4}>
              <Card className="step-card">
                <img
                  src={collaborate}
                  alt="Collaborate"
                  className="step-icon"
                />
                <p className="step-description">
                  <b className="step-name">Collaborate</b>
                  We're all about teamwork, work towards a shared goal
                </p>
              </Card>
            </Col>
            <Col className="grid-child" xs={12} md={4}>
              <Card className="step-card">
                <img src={launch} alt="Launch" className="step-icon" />
                <p className="step-description">
                  <b className="step-name">Launch</b>
                  You've helped build something worth sharing with the world!
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Button, Row, Col } from "antd";
import FadeIn from "react-fade-in";
import { NavLink } from "react-router-dom";

// Images
import cycle from "static/images/media/cycle.svg";

export default function About() {
  return (
    <div className="about-section">
      <Row gutter={0} className="about-grid">
        <Col className="grid-child description-col" xs={24} md={12}>
          <h2 className="heading">About us</h2>
          <FadeIn delay="300">
            <p className="about-description">
              In a world that is rapidly becoming defined by change, value can
              only come from managing a multitude of change processes, seizing
              ever-changing opportunities. The ideal way for this to occur is
              through a fluid, open, organizational model with an interconnected
              ‘team of teams’. This <b>‘People Model’</b> is what we employ at
              Nomadion.
            </p>
          </FadeIn>
          <NavLink exact to="/projects-by-nomadion">
            <Button className="projects-button">View Projects</Button>
          </NavLink>
        </Col>
        <Col className="grid-child graphic-col" xs={24} md={12}>
          <div className="cycle-container">
            <img className="cycle" src={cycle} alt="Nomadion Process Cycle" />
            <p className="cycle-description">
              At Nomadion, we’re a part of a constellation of interconnected
              teams that come together around specific goals.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

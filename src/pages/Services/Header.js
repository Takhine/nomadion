import React from "react";
import FadeIn from "react-fade-in";
import { Tag, Row, Col } from "antd";

// Images
import computer from "static/images/media/computer.svg";
export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <Row className="header-row">
          <Col className="content-column" xs={24} md={16} lg={12}>
            <FadeIn transitionDuration="800">
              <h1 className="main-title">
                <span>Services.</span>
              </h1>
            </FadeIn>
            <FadeIn delay="300">
              <h3 className="main-description">
                You can count on us for a multitude of services. Apart from our
                niche in software development we count on our trusted partners
                and vouch for their excellence in areas of expertise other than
                our own.
              </h3>
            </FadeIn>
            <div className="tags-container">
              <div className="tags-row">
                <Tag className="blue-tag">Blog Site</Tag>
                <Tag className="blue-tag">E - Commerce</Tag>
                <Tag className="blue-tag">CMS</Tag>
                <Tag className="blue-tag">LMS</Tag>
                <Tag className="blue-tag">CRM</Tag>
              </div>
              <div className="tags-container">
                <Tag className="white-tag">Hybrid Apps</Tag>
                <Tag className="white-tag">Native Apps</Tag>
              </div>
              <div className="tags-container">
                <Tag className="bordered-tag">Social Media</Tag>
                <Tag className="bordered-tag">SEO</Tag>
                <Tag className="bordered-tag">Recruitment</Tag>
                <Tag className="bordered-tag">Legals</Tag>
              </div>
              <div className="tags-container">
                <Tag className="underlined-tag">Startup Consultancy</Tag>
              </div>
            </div>
          </Col>
          <Col className="image-column" xs={24} md={8} lg={12}>
            <div className="header-image-container">
              <img
                src={computer}
                className="header-image"
                alt="Nomadion services"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

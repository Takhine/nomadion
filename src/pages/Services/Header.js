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
                niche in software development we bring in our trusted partners
                and vouch for their excellence in areas of expertise other than
                our own.
              </h3>
            </FadeIn>
            <div className="tags-container">
              <div className="tags-row">
                <Tag className="blue-tag tag">Blog Site</Tag>
                <Tag className="blue-tag tag">E - Commerce</Tag>
                <Tag className="blue-tag tag">CMS</Tag>
                <Tag className="blue-tag tag">LMS</Tag>
                <Tag className="blue-tag tag">CRM</Tag>
              </div>
              <div className="tags-row">
                <Tag className="white-tag tag">Hybrid Apps</Tag>
                <Tag className="white-tag">Native Apps</Tag>
              </div>
              <div className="tags-row">
                <Tag className="bordered-tag tag">Social Media</Tag>
                <Tag className="bordered-tag tag">SEO</Tag>
                <Tag className="bordered-tag tag">Recruitment</Tag>
                <Tag className="bordered-tag tag">Legals</Tag>
              </div>
              <div className="tags-row">
                <Tag className="primary-tag tag">Startup Consultancy</Tag>
              </div>
            </div>
          </Col>
          <Col className="image-column" xs={24} md={8} lg={12}>
            <div className="image-container">
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

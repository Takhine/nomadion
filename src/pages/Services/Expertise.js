import React from "react";
import { Row, Col, Card } from "antd";

const services = [
  {
    heading: "The Virtual Store",
    md: 24,
    lg: 24,
    cardStyles: "white-card eCommerce",
    subServices: [
      {
        name: "E - Commerce",
        description: "",
      },
    ],
  },
  {
    heading: "Online Business Cards",
    md: 12,
    lg: 12,
    cardStyles: "white-card bCards",
    subServices: [
      {
        name: "Portfolio",
        description: "",
        cardStyle: "rightAlign"
      },
      {
        name: "Company Website",
        description: "",
      },
    ],
  },
  {
    heading: "App Development",
    md: 12,
    lg: 12,
    cardStyles: "blue-card apps",
    subServices: [
      {
        name: "Hybrid App",
        description: "",
        cardStyle: "rightAlign"
      },
      {
        name: "Native App",
        description: "",
      },
    ],
  },
  {
    heading: "Management Systems",
    md: 12,
    lg: 8,
    cardStyles: "white-card",
    subServices: [
      {
        name: "CMS",
        description: <p>Equip yourself with a <b>Content Management System</b> flexible enough to use as a personal blog or even a channel serving multi-format content to a large audience.</p>,
      },
      {
        name: "CRM",
        description: <p>For your growing clientele & expanding business <b>Customer Relationship Management</b> is vital. Sprinkle in some analytics that matters to your business and you have to perfext tool meet those annual sales targets</p>,
      },
      {
        name: "LMS",
        description: <p>With the dawn of the next industrial revolution, education is no longer limited to the boudaries of traditional University. Are you looking to build a <b>Learning Management System</b>? Hop on! We'll ride this wave of online learning together.</p>,
      },
    ],
  },
];
export default function Expertise() {
  return (
    <div className="expertise">
      {services.map((service) => (
        <div key={service.heading} className="service-block">
          <h2 className="service-heading">{service.heading}</h2>
          <div className="service-card-container">
            <Row className="service-row" justify="center" gutter={8}>
              {service.subServices.map((subService) => (
                <Col
                  key={subService.name}
                  className="service-col"
                  xs={24}
                  md={service.md}
                  lg={service.lg}
                >
                  <Card className={`service-card ${service.cardStyles} ${subService.cardStyle}`}>
                    <h4 className="service-name">{subService.name}</h4>
                    <div className="service-description">
                      {subService.description}
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      ))}
    </div>
  );
}

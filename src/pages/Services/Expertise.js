import React from "react";
import { Button, Row, Col, Card } from "antd";

const services = [
  {
    heading: "Management Systems",
    md: 12,
    lg: 8,
    cardStyles: "white-card",
    subServices: [
      {
        name: "CMS",
        description: "",
      },
      {
        name: "CRM",
        description: "",
      },
      {
        name: "LMS",
        description: "",
      },
    ],
  },
  {
    heading: "The Virtual Store",
    md: 24,
    lg: 24,
    cardStyles: "white-card",
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
    cardStyles: "white-card",
    subServices: [
      {
        name: "Portfolio",
        description: "",
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
    cardStyles: "blue-card",
    subServices: [
      {
        name: "Hybrid App",
        description: "",
      },
      {
        name: "Native App",
        description: "",
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
            <Row className="service-row" gutter={8}>
              {service.subServices.map((subService) => (
                <Col
                  key={subService.name}
                  className="service-col"
                  xs={24}
                  md={service.md}
                  lg={service.lg}
                >
                  <Card className={`service-card ${service.cardStyles}`}>
                    <h4 className="service-name">{subService.name}</h4>
                    <p className="service-description">
                      {subService.description}
                    </p>
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

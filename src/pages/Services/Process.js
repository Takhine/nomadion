import React from "react";
import { Button, Row, Col, Card } from "antd";

// Images
import process1 from "static/images/media/process/process-1.svg";
import process2 from "static/images/media/process/process-2.svg";
import process3 from "static/images/media/process/process-3.svg";
import process4 from "static/images/media/process/process-4.svg";
import process5 from "static/images/media/process/process-5.svg";
import process6 from "static/images/media/process/process-6.svg";

const processes = [
  {
    heading: "Project Plan",
    image: process2,
  },
  {
    heading: "Design",
    image: process3,
  },
  {
    heading: "Development",
    image: process4,
  },
  {
    heading: "Testing",
    image: process5,
  },
  {
    heading: "Deploy",
    image: process6,
  },
];
export default function Process() {
  return (
    <div className="process">
      <h2 className="heading">Our Process</h2>
      <Row gutter={4} className="process-container">
        <Col xs={24} md={12} lg={8}>
          <Card className="first-card">
            <div className="process-card">
              <img
                className="process-image"
                src={process1}
                alt="Getting to know you"
              />
              <h3 className="process-heading">Getting to know you</h3>
              <Button className="contact-button">Get in touch</Button>
            </div>
          </Card>
        </Col>
        {processes.map((process) => (
          <Col key={process.heading} xs={24} md={12} lg={8}>
            <div className="process-card">
              <img
                className="process-image"
                src={process.image}
                alt={process.heading}
              />
              <h3 className="process-heading">{process.heading}</h3>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

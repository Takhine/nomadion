import React, { useState } from "react";
import { Affix, Menu, Tag, Card, Row, Col, Button } from "antd";
import Fade from "react-reveal/Fade";
import people from 'static/images/icons/people-icon.svg';
import peopleBlue from 'static/images/icons/people-blue.svg';


const StartupsContent = () => {
  return (
    <div>
      <div className="tags-row">
        <Tag className="blue-tag tag">Eventgrab</Tag>
        <Tag className="blue-tag tag">Grassbox</Tag>
      </div>
    </div>
  );
};

const InitiativesContent = () => {
  return (
    <div className="initiative-container">
      <Row gutter={16} className="initiative-row">
        <Col xs={24} md={12}>
          <Card className="project-card initiative-card">
            <img src={peopleBlue} alt="People Icon" />
          </Card>
        </Col>
        <Col xs={24} md={12} className="initiative-content">
          <h4 className="project-name">NGO/NPO Platform</h4>
          <Fade>
            <div className="project-description">You care about giving back to the world? We're really interested in working with you on our upcoming project. <b style={{color:'#00A8E8'}}>Let's Connect</b>!</div>
          </Fade>
          <Button className="project-button">
            <img src={people} alt="People Icon" /> Learn More
          </Button>
        </Col>
      </Row>
    </div>
  );
};

const ProjectsContent = () => {
  return <div></div>;
};
export default function Featured() {
  const [current, setCurrent] = useState("initiative");
  const handleNav = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="featured" style={{ height: "1800px" }}>
      <Affix offsetTop={40} className="projects-navigation">
        <Menu
          className="projects-menu"
          onClick={handleNav}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="initiative">Initiatives</Menu.Item>
          <Menu.Item key="live-projects">Live Projects</Menu.Item>
          <Menu.Item key="startups">Startups</Menu.Item>
        </Menu>
      </Affix>
      <div className="featured-content">
        {current === "initiative" && (
          <div className="featured-block">
            <Fade>
              <p className="featured-description">
                We give back to the people through our predominantly Social
                Ventures, which encompass community-based initiatives to tackle
                humanitarian and environmental issues.
              </p>
              <InitiativesContent />
            </Fade>
          </div>
        )}
        {current === "live-projects" && (
          <div className="featured-block">
            <Fade>
              <p className="featured-description">
                Our projects can be anything from educational and research
                oriented, to product based, bridging the gap between what
                society needs and what technology has to offer.
              </p>
              <ProjectsContent />
            </Fade>
          </div>
        )}
        {current === "startups" && (
          <div className="featured-block">
            <Fade>
              <p className="featured-description">
                We take a project and work on it until it has an established and
                sustainable business model, that can adapt and grow
                independently.
              </p>
              <StartupsContent />
            </Fade>
          </div>
        )}
      </div>
    </div>
  );
}

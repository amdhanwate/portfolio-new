import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { Col, Container, Row } from "react-bootstrap";

import mditor from "../../Assets/Projects/mditor.png";
import monsterapi from "../../Assets/Projects/monsterapi.png";
import pms from "../../Assets/Projects/pms.jpg";
import shopkart from "../../Assets/Projects/shopkart.png";
import fakeReview from "../../Assets/Projects/fake-review.png";

function Projects() {
  const githubLink = "https://github.com/amdhanwate";
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "start", paddingBottom: "10px" }}>
          <Col sm={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={shopkart}
              isBlog={false}
              title="ShopKart: An e-commerce webapp"
              description="ShopKart allows you to search and buy your favourite products. The webapp is built using Angular, Node.js, MongoDB. User can add products to cart, view the product details and pay for their order."
              ghLink={`${githubLink}/shopkart-backend`}
              demoLink="https://shoppkartt.netlify.app/"
            />
          </Col>

          <Col sm={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={monsterapi}
              isBlog={false}
              title="MonsterAPI"
              description="A freelance project developed using ReactJS and Node.js allows people to access Generative AI models through scalable APIs."
              demoLink="https://monsterapi.ai/"
            />
          </Col>

          <Col sm={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={fakeReview}
              isBlog={false}
              title="Fake Review Detection"
              description="A Fake review detection system developed to differentiate between the fake and real reviews on particular products on Amazon. The frontend is built using ReactJS and the backend using Python and Flask. We used SVM to We used SVM to classify the reviews as fake or real."
              ghLink={`${githubLink}/fake-analyzer-backend`} 
              demoLink="https://drive.google.com/file/d/1AfV3gnn1UxZ-ZIFpiaJ-Sw-k1NaTYh9I/view?usp=share_link"             
            />
          </Col>

          <Col sm={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={pms}
              isBlog={false}
              title="Project Management System"
              description="A simple interface for students to manage their college projects. Basically a very minimalist version of Jira. Developed using MERN stack."
              ghLink={`${githubLink}/PMS`}
            />
          </Col>

          <Col sm={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={mditor}
              isBlog={false}
              title="Mditor: A markdown editor built with python"
              description="Create and edit markdown files, save them as PDF or HTML on the go. This simple desktop application allows you to do this in a simple and beautiful interface."
              ghLink={`${githubLink}/MDitor-Realtime-Markdown-editor`}
              demoLink="https://drive.google.com/file/d/1iL32kRwqxDGjjKdT30fa48dU9oQIGjAa/view?usp=share_link"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

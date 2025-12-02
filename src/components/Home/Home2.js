import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub, AiFillInstagram, AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Full Stack Software Engineer with <b className="purple">3 years of progressive experience</b> building and scaling enterprise-grade microservices-based
              solutions in <b class="purple">SpringBoot</b>, <b class="purple">React.js</b>, <b class="purple">Java</b>. 
              <br />
              <br />
              I have proven expertise in building high-performance systems, architecting SaaS platforms, and
              integrating AI/ML features. I am adept at driving end-to-end development, mentoring team members, and delivering robust
              solutions across the BFSI Sector.
              {/* <br />I code in
              <i>
                <b className="purple"> Java, Python and JavaScript. </b>
              </i>
              <br />
              <br />
              I love to build
              <i>
                <b className="purple"> things </b> that help people ease their work.
                Recently, I've developed interests into
                <b className="purple">
                  {" "} AI {" "}
                </b>
                I mean how cool is it that you can generate beautiful image just by throwing text prompts at AI..😎
              </i>
              <br />
              <br />
              Every now and then I apply my passion developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Angular</b>
              </i>
            </p> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/amdhanwate"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/abhi_3309?t=YvJhK9HvaGXIjTOlcXT_nA&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhijeet-dhanwate/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/they_call_me_abhii?igshid=ZmZhODViOGI="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

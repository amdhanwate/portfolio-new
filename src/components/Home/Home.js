import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {

  const handleViewResumeClick = () => {
    console.log("View Resume button clicked");

    window.open("https://drive.google.com/file/d/1KXJH1bXKXJH1bXKXJH1bXKXJH1bXK/view?usp=sharing", "_blank");
  }

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello Everyone!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                My name is
                <strong className="main-name"> Abhijeet Dhanwate</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <small className="font-monospace">and I am a</small>
                <Type />
              </div>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

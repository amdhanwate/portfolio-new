import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <p>Hi Everyone 👋</p>
            My name is <span className="purple">Abhijeet</span>
            <br />
            I am a Full stack Web Engineer who finds joy in using technology to build solutions. 
            <br />
            <br />
            Apart from coding, I love to
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Read about tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

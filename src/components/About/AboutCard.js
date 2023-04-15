import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhijeet Dhanwate </span>
            from <span className="purple"> Shirdi, Maharashtra.</span>
            <br />
            Pursuing Final Year B-Tech in Computer Engineering From MIT Academy OF Engineering and working as Product Engineering Intern @Kylas.io
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
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

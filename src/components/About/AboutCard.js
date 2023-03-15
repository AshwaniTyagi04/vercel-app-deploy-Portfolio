import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashwani Tyagi </span>
            from <span className="purple"> Ghaziabad, Uttar Pradesh.</span>
            <br />I am a engineer and pursuing B.TECH in Computer Science Engineering from Sharda University.<br/> I motivated my own small success. I try to learn new technologies everyday.  
            <br />
            <br />
            Apart from developing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym
            </li>
          </ul>

          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
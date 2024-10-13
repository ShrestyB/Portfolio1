import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shresty Bohra </span>
            from <span className="purple"> Surat, India.</span>
            <br />
            I am currently a final year student pursuing B.Tech in CSE.
            <br />
            I am full stack developer and an AI-ML enthusiast
            <br />
          
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shresty</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

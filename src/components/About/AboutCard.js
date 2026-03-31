import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "0.9em" }}>
            Hi Everyone, I'm{" "}
            <span className="purple">Muaz</span>
            <br />
            <br />
            I specialize in building{" "}
            <b className="purple">scalable games</b> and{" "}
            <b className="purple">interactive applications</b>, with a strong
            focus on{" "}
            <b className="purple">real-time multiplayer systems</b>,{" "}
            <b className="purple">backend architecture</b>, and{" "}
            <b className="purple">high-performance gameplay development</b>{" "}
            across mobile, WebGL, and cross-platform environments.
            <br />
            Over the years, I've worked on a wide range of projects including{" "}
            <b className="purple">open-world games</b>,{" "}
            <b className="purple">FPS/TPS titles</b>,{" "}
            <b className="purple">racing games</b>,{" "}
            <b className="purple">MMORPGs</b>, and{" "}
            <b className="purple">multiplayer card/board games</b>, while also
            leading teams and handling end-to-end product development.
            <br />
            Beyond gameplay, I have hands-on experience with{" "}
            <b className="purple">backend systems</b> (Node.js, APIs),{" "}
            <b className="purple">cloud infrastructure</b>,{" "}
            <b className="purple">real-time communication</b>,{" "}
            <b className="purple">LiveOps</b>,{" "}
            <b className="purple">analytics</b>, and{" "}
            <b className="purple">Web3 integrations</b>, helping bring complete
            products from idea to production.
            <br />
            <br />
            Apart from development, here are a few things I enjoy:
          </p>
          <ul style={{ fontSize: "0.9em" }}>
            <li className="about-activity">
              <ImPointRight /> Building and experimenting with new game systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI and real-time technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Following global affairs and geopolitics
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", fontSize: "0.9em", fontStyle: "italic" }}>
            "I focus on building systems that scale, perform, and deliver real
            value."
          </p>
          <footer className="blockquote-footer" style={{ fontSize: "0.9em", fontStyle: "italic" }}>Muaz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

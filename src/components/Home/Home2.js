import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

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
              I design and build{" "}
              <b className="purple">scalable interactive products</b> with a
              strong focus on{" "}
              <b className="purple">Game Engines</b>,{" "}
              <b className="purple">Multiplayer Systems</b>,{" "}
              <b className="purple">Backend Architecture</b>, and{" "}
              <b className="purple">Real-Time Experiences</b>.
              <br />
              <br />
              With <b className="purple">10+ years</b> of industry experience,
              I've delivered solutions across{" "}
              <b className="purple">Mobile</b>,{" "}
              <b className="purple">WebGL</b>,{" "}
              <b className="purple">Multiplayer Games</b>,{" "}
              <b className="purple">AI-Integrated Applications</b>, and{" "}
              <b className="purple">Web3-Enabled products</b>.
              <br />
              <br />
              My work covers{" "}
              <b className="purple">Gameplay Programming</b>,{" "}
              <b className="purple">Backend Systems</b>,{" "}
              <b className="purple">Liveops</b>,{" "}
              <b className="purple">Monetization</b>, and{" "}
              <b className="purple">Technical Leadership</b>.
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
                  href="https://github.com/SyedMuaaz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/syedmuaaz333"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/syed-muaz-ul-hasan-766ba2116/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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

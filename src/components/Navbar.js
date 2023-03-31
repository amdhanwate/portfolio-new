import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  AiFillStar, AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser, AiOutlineMenu
} from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgGitFork } from "react-icons/cg";
import { ImLinkedin, ImBooks } from "react-icons/im";
import { GiVideoConference } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md"
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/experiences"
                onClick={() => updateExpanded(false)}
              >
                <MdOutlineWorkOutline
                  style={{ marginBottom: "2px" }}
                />{" "}
                Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/education"
                onClick={() => updateExpanded(false)}
              >
                <ImBooks style={{ marginBottom: "2px" }} /> Education
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://linkedin.com/in/abhijeet-dhanwate"
                target="_blank"
                rel="noreferrer"
              >
                <ImLinkedin style={{ marginBottom: "2px" }} /> Linkedin
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item className="fork-btn">
              <Dropdown className="text-white" align="end" drop="drop-centered">
                <Dropdown.Toggle as={"span"} className="hidden-dropdown-arrow">
                   <AiOutlineMenu style={{ marginBottom: "2px" }} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/education" onClick={() => updateExpanded(false)}>
                    <ImBooks style={{ marginBottom: "2px" }} /> Education
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/education#certifications" onClick={() => updateExpanded(false)}>
                    <GrCertificate style={{ marginBottom: "2px" }} /> Certifications
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/education#conferences" onClick={() => updateExpanded(false)}>
                    <GiVideoConference style={{ marginBottom: "2px" }} /> Conferences
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown >
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

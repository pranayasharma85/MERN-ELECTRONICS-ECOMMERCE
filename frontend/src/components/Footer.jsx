import React from "react";
import { Container, NavLink } from "react-bootstrap";
import { FaPhone, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        borderTop: "2px solid #ddd",
        padding: "20px 0",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Container>
        <p className="text-center" style={{ margin: 0 }}>
          © Pranaya Sharma. All rights reserved {new Date().getFullYear()}
        </p>

        <NavLink href="tel:9864236386">
          <p className="text-center" style={{ margin: 0 }}>
            <FaPhone /> Contact us: 9864236386
          </p>
        </NavLink>
        <p className="text-center" style={{ margin: 0 }}>
          Follow us:
        </p>
        <p className="text-center" style={{ margin: 0 }}>
          <a
            href="https://www.facebook.com/pranaya.sharma.35"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook /> Facebook
          </a>
        </p>
        <p className="text-center" style={{ margin: 0 }}>
          <a
            href="https://www.instagram.com/prane_sharma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;

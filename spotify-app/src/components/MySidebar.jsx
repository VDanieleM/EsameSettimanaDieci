import React, { useState } from "react";
import { Navbar, InputGroup } from "react-bootstrap";
import Logo from "../assets/logo/Spotify_Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Sidebar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      setResults(response.data);
      setRedirect(true);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  if (redirect) {
    return <useNavigate to={`/search?query=${query}`} />;
  }

  return (
    <div className="col-2">
      <Navbar className="fixed-left">
        <div className="nav-container d-flex justify-content-between align-items-center flex-column mx-1">
          <Navbar.Brand className="" as={Link} to="/">
            <img src={Logo} alt="Spotify_Logo" width="131" height="40" />
          </Navbar.Brand>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Navbar className="navbar-nav">
              <ul className="ps-0">
                <li className="ps-4">
                  <Link className="nav-item nav-link" to="/">
                    <FontAwesomeIcon icon={faHome} /> Home{" "}
                  </Link>
                </li>
                <li className="ps-4">
                  <Link className="nav-item nav-link" to="/your-library">
                    <FontAwesomeIcon icon={faBookOpen} className="fa-lg" /> Your
                    Library{" "}
                  </Link>
                </li>
                <InputGroup className="input-group mt-3 px-3">
                  <input
                    type="text"
                    className="form-control mb-2"
                    id="searchField"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <div style={{ marginBottom: "4%" }}>
                    <button
                      className="btn btn-outline-secondary btn-sm h-100"
                      type="button"
                      onClick={handleSearch}
                    >
                      GO
                    </button>
                  </div>
                </InputGroup>
              </ul>
            </Navbar>
          </div>
        </div>
        <div className="nav-btn">
          <button className="signup-btn" type="button">
            Sign Up
          </button>
          <button className="login-btn" type="button">
            Login
          </button>
          <a href="#" className="footerLink">
            Cookie Policy
          </a>{" "}
          |{" "}
          <a href="#" className="footerLink">
            {" "}
            Privacy
          </a>
        </div>
      </Navbar>
    </div>
  );
}

import React from "react";
import { ResetDatabase } from "./Functions";
import "./Header.css";

function Header(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark fixed-top"
        aria-label="Fourth navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Cafe & Wifi ☕️
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/add-cafe"
                  style={{
                    visibility: props.visibility,
                    position:
                      props.visibility === "hidden" ? "absolute" : "relative",
                  }}
                >
                  Add Cafe
                </a>
              </li>
              <li className="nav-item">
                <button
                  style={{
                    margin: "0",
                    visibility: props.visibility,
                    position:
                      props.visibility === "hidden" ? "absolute" : "relative",
                  }}
                  className="nav-link"
                  onClick={() => ResetDatabase()}
                >
                  Reset Cafe List
                </button>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  GitHub Source Code
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://github.com/demissie96/cafe_and_wifi_backend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Backend (Node.js)
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://github.com/demissie96/cafe_and_wifi_frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Frontend (React)
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

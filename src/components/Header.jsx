import React from "react";
import { ResetDatabase } from "./Functions";

function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
        aria-label="Fourth navbar example"

      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
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
                >
                  Add Cafe
                </a>
              </li>
              <li className="nav-item">
                <button
                  style={{ margin: "0" }}
                  className="nav-link"
                  onClick={() => ResetDatabase()}
                >
                  Reset Cafe List
                </button>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  GitHub Source Code
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Backend (Node.js)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
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

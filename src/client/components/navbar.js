import Profile from "./profile";
import Programme from "./programme";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Search from "./search";

export default function Navbar() {
  const [search, setSearch] = useState("");
  let history = useHistory();
  let value = "";
  function ProghandleClick() {
    history.push("/programme");
  }

  function HomHandleClick() {
    history.push("/home");
  }

  function handleSubmit(e) {
    history.push({
      pathname: "/search",
      state: search,
    });
    e.preventDefault();
    // console.log("hi there!" + search);
  }

  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
        <div className="container">
          <img
            className="logo"
            href="/"
            onClick={HomHandleClick}
            src="assets/img/logo%20avec%20script.png"
          />
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link btn" onClick={HomHandleClick}>
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn" onClick={ProghandleClick}>
                  Programme
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn" href="#">
                  Envoyer Demande
                </a>
              </li>
            </ul>
            <form
              className="me-auto search-form"
              target="_self"
              onSubmit={handleSubmit} // call function when hit enter in search bar
            >
              <div className="d-flex align-items-center">
                <label
                  className="form-label d-flex mb-0"
                  htmlFor="search-field"
                >
                  <i
                    className="fa fa-search"
                    style={{ color: "var(--bs-teal)" }}
                  />
                </label>
                <input
                  className="form-control search-field"
                  type="search"
                  id="search-field"
                  name="search"
                  onChange={(event) => setSearch(event.target.value)} // get value from search bar
                  style={{
                    marginBottom: 5,
                    borderRadius: 0,
                    borderWidth: 1,
                    borderColor: "var(--bs-teal)",
                  }}
                />
              </div>
            </form>
            <button
              className="btn btn-light action-button"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="far fa-user pr-2" aria-hidden="true" /> Profile
            </button>

            {/* buttons modal contents */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <Profile />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
        <a classNameName="navbar-brand" href="/">
          Navbar
        </a>
        <button
          classNameName="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classNameName="navbar-toggler-icon"></span>
        </button>
        <div classNameName="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div classNameName="navbar-nav">
            <a classNameName="nav-item nav-link active" href="/">
              Home <span classNameName="sr-only">(current)</span>
            </a>
            <a classNameName="nav-item nav-link" href="/">
              Features
            </a>
            <a classNameName="nav-item nav-link" href="/">
              Pricing
            </a>
            <a classNameName="nav-item nav-link disabled" href="/">
              Disabled
            </a>
          </div>
        </div>
        <div>
          <div className="form-check form-switch m-2 text-light ">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable Dark mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

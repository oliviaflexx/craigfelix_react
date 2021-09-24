import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
      <React.Fragment>
        <div class="logo">
          <Link to="/" class="navbar-brand">
            Craig Felix
          </Link>
          <a href="https://www.instagram.com/craigfelix360/" class="social-ico">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12,3.8c2.67,0,2.986.01,4.041.058A5.552,5.552,0,0,1,17.9,4.2a3.31,3.31,0,0,1,1.9,1.9,5.552,5.552,0,0,1,.344,1.857C20.188,9.014,20.2,9.33,20.2,12s-.01,2.986-.058,4.041A5.552,5.552,0,0,1,19.8,17.9a3.31,3.31,0,0,1-1.9,1.9,5.552,5.552,0,0,1-1.857.344c-1.054.048-1.371.058-4.041.058s-2.987-.01-4.041-.058A5.552,5.552,0,0,1,6.1,19.8a3.31,3.31,0,0,1-1.9-1.9,5.552,5.552,0,0,1-.344-1.857C3.812,14.986,3.8,14.67,3.8,12s.01-2.986.058-4.041A5.552,5.552,0,0,1,4.2,6.1,3.31,3.31,0,0,1,6.1,4.2,5.552,5.552,0,0,1,7.959,3.86C9.014,3.812,9.33,3.8,12,3.8M12,2c-2.716,0-3.056.012-4.123.06a7.355,7.355,0,0,0-2.427.465A5.106,5.106,0,0,0,2.525,5.45,7.355,7.355,0,0,0,2.06,7.877C2.012,8.944,2,9.284,2,12s.012,3.056.06,4.123a7.355,7.355,0,0,0,.465,2.427A5.106,5.106,0,0,0,5.45,21.475a7.355,7.355,0,0,0,2.427.465C8.944,21.989,9.284,22,12,22s3.056-.011,4.123-.06a7.355,7.355,0,0,0,2.427-.465,5.106,5.106,0,0,0,2.925-2.925,7.355,7.355,0,0,0,.465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123a7.355,7.355,0,0,0-.465-2.427A5.106,5.106,0,0,0,18.55,2.525a7.355,7.355,0,0,0-2.427-.465C15.056,2.012,14.716,2,12,2Z"></path>
              <path d="M12,6.865A5.135,5.135,0,1,0,17.135,12,5.135,5.135,0,0,0,12,6.865Zm0,8.468A3.333,3.333,0,1,1,15.333,12,3.333,3.333,0,0,1,12,15.333Z"></path>
              <circle cx="17.338" cy="6.662" r="1.2"></circle>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UCPd8PAk27OcHDnwDVtMFQHQ/featured/"
            class="social-ico"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.062,6.927A2.631,2.631,0,0,0,20.234,5.1c-1.637-.439-8.224-.439-8.224-.439S5.439,4.652,3.785,5.1A2.631,2.631,0,0,0,1.957,6.927,27.322,27.322,0,0,0,1.5,12.009a27.287,27.287,0,0,0,.456,5.062A2.631,2.631,0,0,0,3.785,18.9c1.635.44,8.225.44,8.225.44s6.57,0,8.224-.44a2.631,2.631,0,0,0,1.828-1.827,27.364,27.364,0,0,0,.438-5.062A27.406,27.406,0,0,0,22.062,6.927ZM9.907,15.152v-6.3l5.483,3.153Z"></path>
            </svg>
          </a>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>Menu</span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/aerials"
                    className={(isActive) =>
                      "nav-link" + (!isActive ? "" : " active")
                    }
                  >
                    Aerials
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/travel"
                    className={(isActive) =>
                      "nav-link" + (!isActive ? "" : " active")
                    }
                  >
                    Travel
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/commercial"
                    className={(isActive) =>
                      "nav-link" + (!isActive ? "" : " active")
                    }
                  >
                    Commercial
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className={(isActive) =>
                      "nav-link" + (!isActive ? "" : " active")
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
};

export default Navbar;
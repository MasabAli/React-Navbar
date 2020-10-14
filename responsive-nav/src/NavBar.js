import React, { Fragment } from "react";
import './NavBar.css';
function NavBar() {
  return (
    <Fragment>
      <div>
        <nav>
          <div className="logo">Masab</div>
          <ul className="nav-link">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}
export default NavBar;

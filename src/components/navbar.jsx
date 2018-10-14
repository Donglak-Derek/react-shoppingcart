import React from "react";

// stateless Functional Component

const NavBar = props => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar n avbar-light bg -light">
      <a className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

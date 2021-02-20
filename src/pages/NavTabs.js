import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <div className="nav nav-tabs">
      <button className="nav-item">
        <Link to="/create" className={location.pathname === "/create" ? "nav-link active" : "nav-link"}>
          Create New Goal
        </Link>
      </button>
    </div>
  );
}

export default NavTabs;

import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.links}>
            <Link to="/">View all</Link>
          </li>
          <li>
            <Link to="/add-cover">Add new</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

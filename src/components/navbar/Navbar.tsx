import { FC } from "react";
import classNames from "classnames";

import classes from "./Navbar.module.scss";

const Navbar: FC = () => {
  return (
    <nav className={classNames("navbar", [classes.Navbar])}>
        <h2>Gazdasági hírek</h2>
    </nav>
  );
};

export default Navbar;
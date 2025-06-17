import React from "react";

import styles from "./Navbar.module.css"; // Corrected 'NavBar' to 'Navbar' (lowercase 'b')
import Button from "../Button/Button"; // Changed to default import for Button component
import Logo from "../Logo/Logo";
import Search from '../../assets/Search/Search'; 

const NavBar = () => { // Note: The component name here is 'NavBar' (capital B), but the file is 'Navbar.jsx' (lowercase b). This might cause warnings or issues later, but the current error is about the CSS import.
  return (
    <nav className={styles.navBar}>
      <Logo/>
      <Search/>
      <Button children="GIVE FEEDBACK" />
    </nav>
  );
};

export default NavBar;
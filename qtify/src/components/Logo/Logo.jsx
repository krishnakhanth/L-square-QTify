// In src/components/Logo/Logo.jsx

import React from "react";
// Change this line to import 'logo.png'
import LogoImage from "../../assets/logo.png";
export default function Logo() {
  return <img src={LogoImage} alt="logo" width={67} />;
}
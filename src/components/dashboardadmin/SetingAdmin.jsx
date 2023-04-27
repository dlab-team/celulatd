import React from "react";
import Settings from "../common/Ajustes";
import NavbarComponent from "./NavbarComponent";

export default function SetingAdmin() {
  return (
    <>
      <NavbarComponent />
      <Settings 
      ROL="admin" 
      FUNCION="settings" />
    </>
  );
}

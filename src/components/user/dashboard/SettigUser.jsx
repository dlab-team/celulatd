import React from "react";
import Settings from "../../common/Ajustes";
import NavbarComponentUser from "./NavbarComponentUser";

export default function SettigUser() {
  

    return(
      <>
      <NavbarComponentUser/>
        <Settings
        ROL="user"
        FUNCION="settings"
        />
        </>
    )
}

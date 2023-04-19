import React, { useState } from "react";
import axios from "axios";
import GoogleLoginButton from "./Button";
import { Link } from "react-router-dom";
import "../../../scssWeb/main.css";
import LogoSvg from "../../../assets/img/LogoVector.svg";
import FraseSvg from "../../../assets/img/Frase1Vector.svg";
import Bkgnd from "../../../assets/img/VectorBkgdTransp.svg";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://mi-api.com/login", {
        username,
        password,
      });

      console.log(response.data);

      // Si la opción de recordar datos está activada, se guarda el username y el password en localStorage
      if (remember) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      }
    } catch (err) {
      setError("Nombre de usuario o contraseña incorrectos.");
    }
  };

  const handleRememberChange = () => {
    setRemember(!remember);
  };

  return (
    <div className="container-user background-register">
      {/* <img src={Bkgnd} className="background-register" /> */}
      <div className="container-user-logo">
        <img src={LogoSvg} className="register-logo" />
        <img src={FraseSvg} className="register-logo" />
      </div>
      <script src="https://apis.google.com/js/platform.js" async defer></script>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="forgot-password">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
        <div className="remember-me">
          <label htmlFor="remember-me" className="checkbox-label">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              onChange={handleRememberChange}
              checked={remember}
            />
            <span className="checkbox-custom"></span>
            Recordar datos
          </label>
        </div>
        {error && <p>{error}</p>}
        <Link to="/Inicio" className='Link'>
        <button type="submit">Iniciar sesión</button>
        </Link> 
        <div className="register">
          ¿Aún no tienes cuenta? 
          <Link to="/register" className='Link'>
          <a href="#">Regístrate aquí</a>  
        </Link>   
        </div>
        <div className="or">
          <hr />
          <span>o</span>
          <hr />
        </div>
        <GoogleLoginButton/>
      </form>
    </div>
  );
}

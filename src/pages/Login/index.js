import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo_login from "../../images/logo_login.png";
import "./login.css";
import { Appbar } from "../../components/Appbar";


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === "root@root" && password === "root") {
      navigate("/root");
    } else {
      alert("Credenciais inválidas. Por favor, tente novamente.");
    }
  };

  return (
    <div>
      <Appbar/>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form" onSubmit={handleLogin}>
              <span className="login-form-title"> Bem vindo </span>

              <span className="login-form-title">
                <img src={Logo_login} alt="Sagrado Prazer" />
              </span>

              <div className="wrap-input">
                <input
                  className={email !== "" ? "has-val input" : "input"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="focus-input"
                  data-placeholder="Password"
                ></span>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn">Login</button>
              </div>

              <div className="text-center">
                <span className="txt1">Não possui conta? </span>
                <a className="txt2" href="./Registro">
                  Criar conta
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

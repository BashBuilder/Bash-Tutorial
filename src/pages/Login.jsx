import { useState } from "react";
import "../style/loginStyles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { FiUnlock, FiLock } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { useGlobalContext } from "../contexts/context";

function Login() {
  const navigate = useNavigate();
  const { error, setError, setUser } = useGlobalContext();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [loggedUser, setLoggedUser] = useState({
    email: "",
    password: "",
    isRemebered: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoggedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({
      email: "",
      password: "",
      confirmPassword: "",
    });
    const response = await fetch(import.meta.env.VITE_LOGIN_API, {
      method: "POST",
      body: JSON.stringify(loggedUser),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      setError((prevError) => ({ ...prevError, password: data.error }));
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      setError({});
      navigate("/");
      setLoggedUser({});
    }
  };

  return (
    <section className="login">
      <div className="form-box">
        <form onSubmit={handleSubmit} className="form">
          <h2>Login</h2>
          <div className="input-box">
            <MdOutlineEmail className="icon" />
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={loggedUser.email}
              autoComplete="on"
              required
            />
            <label htmlFor="email">Email</label>
            <p className="error emailError "></p>
          </div>
          <div className="input-box">
            <button>
              {isPasswordShown ? (
                <FiUnlock className="icon" />
              ) : (
                <FiLock className="icon" />
              )}
            </button>
            <input
              type={isPasswordShown ? "text" : "password"}
              name="password"
              onChange={handleChange}
              value={loggedUser.password}
              required
            />
            <label htmlFor="password">Password</label>
            <p className="login-error error"> {error.password} </p>
          </div>

          <div className="forget">
            <label htmlFor="">
              <input
                type="checkbox"
                name="isRemembered"
                onChange={handleChange}
                value={loggedUser.isRemebered}
              />
              Remember me
              <Link to="/login">Forgot Password</Link>
            </label>
          </div>
          <button className="submit">Log in</button>
          <div className="register">
            <p>
              Don't have an account? <Link to="/signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;

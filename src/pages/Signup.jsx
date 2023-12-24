import { useState } from "react";
import "../style/loginStyles/login.css";
import { FiUnlock, FiLock } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { useGlobalContext } from "../contexts/context";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const { error, setError, setUser } = useGlobalContext();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup((prevsignup) => ({ ...prevsignup, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({
      email: "",
      password: "",
      confirmPassword: "",
    });

    if (signup.password === signup.confirmPassword) {
      const response = await fetch(import.meta.env.VITE_SIGNUP_API, {
        method: "POST",
        body: JSON.stringify(signup),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        setError((prevError) => ({
          ...prevError,
          confirmPassword: data.error,
        }));
      }
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        navigate("/");
        setError({});
        setSignup({});
      }
    } else {
      setError((prevError) => ({
        ...prevError,
        confirmPassword: "Password does not match",
      }));
    }
  };

  return (
    <section className="login">
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <div className="input-box">
            <MdOutlineEmail className="icon" />
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={signup.email}
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
              value={signup.password}
              required
            />
            <label htmlFor="password">Password</label>
            <p className="error passwordError"></p>
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
              name="confirmPassword"
              onChange={handleChange}
              value={signup.confirmPassword}
              required
            />
            <label htmlFor="password">Password</label>
            <p className="error confirmPasswordError">
              {error.confirmPassword}
            </p>
          </div>
          <button className="submit">Sign up</button>
        </form>
      </div>
    </section>
  );
}

export default Signup;

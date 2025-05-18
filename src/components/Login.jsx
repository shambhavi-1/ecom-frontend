import { useState } from "react";
import axios from "axios";
import "./AuthPage.css";
import Teddy from "./Teddy";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eyesClosed, setEyesClosed] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
      } else {
        alert("Login successful");
        console.log("Login data:", data);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login request failed");
    }
  };

  return (
    <div className="auth-page">
      <Teddy eyesClosed={eyesClosed} />
      <form className="auth-container" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onFocus={() => setEyesClosed(true)}
          onBlur={() => setEyesClosed(false)}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

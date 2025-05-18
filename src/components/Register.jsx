import { useState } from "react";
import axios from "axios";
import Teddy from "./Teddy";

function Register() {
  const [username, setUsername] = useState(""); // 🟡 ADDED username state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eyesClosed, setEyesClosed] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, username, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
      } else {
        alert("Registration successful");
        console.log("Register data:", data);
      }
    } catch (error) {
      console.error("Register error:", error);
      alert("Registration request failed");
    }
  };

  return (
    <div className="auth-page">
      <Teddy eyesClosed={eyesClosed} />
      <form className="auth-container" onSubmit={handleRegister}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

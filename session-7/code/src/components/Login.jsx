import { useState } from "react";
import { login } from "../services/authServices";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login(form.username, form.password);
      localStorage.setItem("token", res.token);
      navigate("/notes");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h2>Login</h2>

      <input
        placeholder="Enter UserName"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={handleLogin}>Login</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default Login;

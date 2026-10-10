import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("❌ Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("❌ La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    const resp = await login(email, password);

    if (!resp.ok) {
      setMessage("❌ " + resp.error);
      return;
    }

    setMessage("✅ Inicio de sesión exitoso.");
    setTimeout(() => navigate("/profile"), 800);
  };

  return (
    <section className="auth-section">
      <div className="auth-card">
        <h2>Iniciar sesión</h2>

        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            placeholder="tu@correo.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            placeholder="Tu contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Iniciar sesión</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </section>
  );
};

export default LoginPage;

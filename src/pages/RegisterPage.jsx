import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage("❌ Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("❌ La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("❌ Las contraseñas no coinciden.");
      return;
    }

    const resp = await register(email, password);

    if (!resp.ok) {
      setMessage("❌ " + resp.error);
      return;
    }

    setMessage("✅ Registro exitoso. Redirigiendo...");
    setTimeout(() => navigate("/profile"), 800);
  };

  return (
    <section className="auth-section">
      <div className="auth-card">
        <h2>Registro</h2>

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
            placeholder="Mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirmar contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Repite tu contraseña"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Registrarse</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </section>
  );
};

export default RegisterPage;

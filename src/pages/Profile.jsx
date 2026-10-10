import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { email, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();            // borra token + email
    navigate("/login");  // redirige al login
  };

  return (
    <section className="container mt-5">
      <h2 className="mb-3">👤 Perfil de usuario</h2>

      <div className="card p-4 shadow">
        <p><strong>Email:</strong> {email || "No disponible"}</p>

        <button className="btn btn-danger mt-3" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </section>
  );
};

export default Profile;

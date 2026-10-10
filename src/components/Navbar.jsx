import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { token, logout } = useContext(UserContext);     // ⬅️ email removido
  const { total } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">
        🍕 Pizzería Mamma Mía
      </Link>

      <div className="d-flex gap-3">
        {!token && (
          <>
            <Link to="/login" className="btn btn-outline-light">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline-light">
              Register
            </Link>
          </>
        )}

        {token && (
          <>
            <Link to="/profile" className="btn btn-outline-light">
              Profile
            </Link>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

        <Link to="/cart" className="btn btn-success">
          🛒 Total: ${total}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

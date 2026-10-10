import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mt-5">
      <h1>404</h1>
      <h3>Página no encontrada</h3>
      <Link to="/" className="btn btn-primary mt-3">
        Volver al Home
      </Link>
    </div>
  );
};

export default NotFound;

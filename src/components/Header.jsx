const Header = () => {
  return (
    <header
      className="text-center text-light py-5 d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px",
      }}
    >
      <h1 className="fw-bold">Pizzería Mamma Mía!</h1>
      <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
};

export default Header;
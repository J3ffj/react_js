import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="home">

      {/* Navigation Menu */}
      <nav className="navbar">
        <div className="logo">
          TechStore
        </div>

        <div className="nav-menu">
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About Me</Link>
          <Link to="/contact">Contact Us</Link>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-small-title">
            WELCOME TO OUR STORE
          </p>

          <h1>
            Discover the Latest
            <span> Technology</span>
          </h1>

          <p className="hero-description">
            Explore our collection of modern technology products,
            gaming accessories, and smart devices at great prices.
          </p>

          <div className="hero-buttons">
            <Link to="/shop" className="hero-btn primary">
              Shop Now
            </Link>

            <Link to="/about" className="hero-btn secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
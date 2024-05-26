import { Container, Navbar as Navigation } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => { 
  return (
    <Navigation bg="danger" variant="dark">
      <Container>
        <div className="d-flex">
          <Link to="/" className="text-white ms-3 text-decoration-none">
          🏠Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">  
          📒Contacto
          </Link>
        </div>
        <Navigation.Brand className="ms-auto">Happy Cake</Navigation.Brand>🍰
      </Container>
    </Navigation>
  );
};

export default Navbar;
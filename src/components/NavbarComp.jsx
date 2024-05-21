import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import img from '../assets/logo.png';

const NavbarComp = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          <img src={img} alt="botani" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navbar-links">
            <Nav.Link href="/" className="nav-link-custom">Beranda</Nav.Link>
            <NavDropdown title="Fitur" id="basic-nav-dropdown" className="nav-dropdown-custom">
              <NavDropdown.Item href="/upload">Unggah</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/blog" className="nav-link-custom">Informasi</Nav.Link>
            <Nav.Link href="#link" className="nav-link-custom">Kontak</Nav.Link>
          </Nav>
          <div className="navbar-button">
            <button className="custom-button">Download Aplikasi</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
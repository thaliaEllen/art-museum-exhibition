import { RiSearchLine, RiHeartFill } from "react-icons/ri";
import { Navbar, NavbarBrand, Nav } from "reactstrap";

import logo from "../assets/logoMuseum.png";
import logoMobile from "../assets/logoMuseumMobile.png";
import useWindowDimensions from "../hook/useWindowDimensions";

import "../styles/navbar.scss";

function NavbarHomepage() {
  const { width } = useWindowDimensions();
  return (
    <div>
      <Navbar color="white" expand="md" fixed="top" className="navbarContainer">
        <NavbarBrand href="/">
          {width <= 720 ? (
            <img src={logoMobile} className="logo" alt="logo" />
          ) : (
            <img src={logo} className="logo" alt="logo" />
          )}
        </NavbarBrand>
        <Nav>
          <RiSearchLine className="iconSearch" size={32} />
          <div className="buttonFavorite">
            <RiHeartFill color="white" size={20} />
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarHomepage;

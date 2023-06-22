import { RiSearchLine, RiHeartFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Navbar, NavbarBrand, Nav } from "reactstrap";

import logo from "../assets/logoMuseum.png";
import logoMobile from "../assets/logoMuseumMobile.png";
import useWindowDimensions from "../hook/useWindowDimensions";
import "../styles/navbar.scss";
import { useFavorites } from "../redux/sliceFavorites";
import SearchArtObject from "../services/searchArtObject";

function NavbarHomepage(props: any) {
  const { setListArt, setLoadList } = props;
  const { width } = useWindowDimensions();
  const favoritesList = useSelector(useFavorites);

  async function searchFavorites() {
    setLoadList(true);
    const imagesId = favoritesList.map((item) => item.id);
    const lisArtObjects = await SearchArtObject(imagesId);
    setListArt(lisArtObjects);
    setLoadList(false);
  }

  function scrollToSearch() {
    window.scroll({
      top: 1500,
      left: 0,
      behavior: "smooth",
    });
  }

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
          <RiSearchLine
            onClick={() => scrollToSearch()}
            className="iconSearch"
            size={32}
          />
          <div onClick={() => searchFavorites()} className="buttonFavorite">
            <RiHeartFill color="white" size={20} />
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarHomepage;

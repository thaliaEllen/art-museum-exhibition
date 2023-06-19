import { Fragment } from "react";

import "./App.css";
import GalleryPhotos from "./components/galleryPhotos/galleryPhotos";
import NavbarHomepage from "./components/navbarHomepage";

function App() {
  return (
    <Fragment>
      <NavbarHomepage />
      <GalleryPhotos />
    </Fragment>
  );
}

export default App;

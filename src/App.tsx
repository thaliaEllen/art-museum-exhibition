import { Fragment, useState } from "react";

import "./App.css";
import FilterInput from "./components/filterInput";
import GalleryPhotos from "./components/galleryPhotos/galleryPhotos";
import NavbarHomepage from "./components/navbarHomepage";

function App() {
  const [listArt, setListArt] = useState([]);
  const [loadList, setLoadList] = useState(false);
  return (
    <Fragment>
      <NavbarHomepage setListArt={setListArt} setLoadList={setLoadList} />
      <FilterInput setLoadList={setLoadList} setListArt={setListArt} />
      <GalleryPhotos loadList={loadList} listArt={listArt} />
    </Fragment>
  );
}

export default App;

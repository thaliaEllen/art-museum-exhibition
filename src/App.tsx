import { Fragment, useState } from "react";

import "./App.css";
import FilterInput from "./components/filterInput";
import GalleryPhotos from "./components/galleryPhotos/galleryPhotos";
import NavbarHomepage from "./components/navbarHomepage";
import NotFoundArt from "./components/notFoundArt";
import HomePage from "./components/homepage";

function App() {
  const [listArt, setListArt] = useState([]);
  const [loadList, setLoadList] = useState(false);
  const [results, setResults] = useState();

  return (
    <Fragment>
      <NavbarHomepage setListArt={setListArt} setLoadList={setLoadList} />
      <HomePage />
      <FilterInput
        setLoadList={setLoadList}
        setListArt={setListArt}
        setResults={setResults}
      />
      {!loadList && listArt.length == 0 ? (
        <NotFoundArt />
      ) : (
        <GalleryPhotos
          results={results}
          loadList={loadList}
          listArt={listArt}
        />
      )}
    </Fragment>
  );
}

export default App;

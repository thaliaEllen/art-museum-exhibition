import { Api } from "../providers";

async function FilterArtListForTitleAndArtist(
  title: boolean,
  artist?: boolean,
  localization?: boolean,
  term?: string
) {
  let local = "";
  if (localization) {
    local = term as string;
  }
  const response = await Api.get(
    "/search?title=" +
      title +
      "&artistOrCulture=" +
      artist +
      "&geoLocation=" +
      local +
      "&q=" +
      term
  );

  return response.data.objectIDs;
}

export default FilterArtListForTitleAndArtist;

import { Api } from "../providers";

async function FilterArtListForTitleAndArtist(
  title: boolean,
  artist?: boolean,
  term?: string
) {
  const response = await Api.get(
    "/search?title=" + title + "&artistOrCulture=" + artist + "&q=" + term
  );

  return response.data.objectIDs;
}

export default FilterArtListForTitleAndArtist;

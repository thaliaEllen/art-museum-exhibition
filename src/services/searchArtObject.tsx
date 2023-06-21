import { Api } from "../providers";

interface IListArt {
  id: number;
  src: string;
  width: number;
  height: number;
  tags?: [{ value: string; title: string }];
  caption: string;
}

async function SearchArtObject(listArtIds: any) {
  const listaArtObjects: IListArt[] = [];
  const imageNotFound = "https://ispsaude.com.br/images/image-404.png";
  for (let i = 0; i < listArtIds.length; i++) {
    await Api.get("/objects/" + listArtIds[i])
      .then((value) => {
        if (value.data.isPublicDomain) {
          listaArtObjects.push({
            id: value.data.objectID,
            src:
              value.data.primaryImage === ""
                ? imageNotFound
                : value.data.primaryImage,
            width: !value.data.measurements[0].elementMeasurements.Width
              ? 10
              : value.data.measurements[0].elementMeasurements.Width,
            height: !value.data.measurements[0].elementMeasurements.Height
              ? 10
              : value.data.measurements[0].elementMeasurements.Height,
            tags: [{ value: "Domínio público", title: "Domínio público" }],
            caption: value.data.title,
          });
        } else {
          listaArtObjects.push({
            id: value.data.objectID,
            src:
              value.data.primaryImage === ""
                ? imageNotFound
                : value.data.primaryImage,
            width: !value.data.measurements[0].elementMeasurements.Width
              ? 10
              : value.data.measurements[0].elementMeasurements.Width,
            height: !value.data.measurements[0].elementMeasurements.Height
              ? 10
              : value.data.measurements[0].elementMeasurements.Height,
            caption: value.data.title,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log(listaArtObjects);
  return listaArtObjects;
}

export default SearchArtObject;

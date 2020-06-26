import fetch from "isomorphic-fetch";
import { isValidImage } from "./imageUtils";

export const API_BASE = "/api";

export const setImagesDirectoryForProject = (imagesDir: string) => {
  return function getImageGivenDir(fileName: string) {
    const isValid = isValidImage(fileName);
    if (isValid) {
      return `${imagesDir}/${fileName}`;
    }
  };
};

export const setApiBaseForProject = (apiDir: string) => {
  return function getApiEndpointGivenDir(endpoint: string) {
    console.log(
      new URL(`${apiDir}${endpoint}`, `https://${process.env.NOW_URL}`).href,
    );
    return new URL(`${apiDir}${endpoint}`, `https://${process.env.NOW_URL}`)
      .href;
  };
};

export const fetcher = (url) =>
  fetch(url)
    .then((r) => r.json())
    .catch((err) => console.warn(err));

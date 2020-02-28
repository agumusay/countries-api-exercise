import "../styles/main.scss";
import "bootstrap";
import FetchURL from "./lib/fetchPage";
import generateTemplate from "./lib/template";

const baseURL = "https://restcountries.eu/rest/v2/all";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  let countriesObject = new FetchURL(baseURL).fetchApi();
  new generateTemplate("countries-template", document.body).handle(
    countriesObject,
    "span"
  );
});

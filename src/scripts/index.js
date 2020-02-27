import "../styles/main.scss";
import "regenerator-runtime/runtime";
const Handlebars = require("handlebars");
import "bootstrap";
import "jquery";
import "popper.js";

class FetchPage {
  constructor(newBaseURL) {
    this.baseUrl = newBaseURL;
    this.main = document.querySelector("main");
    this.displayCountries();
    this.handle();
  }

  async displayCountries() {
    try {
      let response = await fetch(`${this.baseUrl}`);
      let getApi = await response.json();

      let countriesObj = { ...getApi };

      return countriesObj;
    } catch (error) {
      console.error(error);
    }
  }

  async handle() {
    let source = document.getElementById("countries-template").innerHTML;
    let template = Handlebars.compile(source);
    let context = await this.displayCountries();
    console.log(context);
    let html = template({ countriesObj: context });
    document.body.innerHTML = html;
  }
}

const baseURL = "https://restcountries.eu/rest/v2/all";

document.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");
  new FetchPage(baseURL);
});

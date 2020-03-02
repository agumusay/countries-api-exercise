import "regenerator-runtime/runtime";
export default class FetchPage {
  constructor(newBaseURL) {
    this.baseUrl = newBaseURL;
    this.fetchApi();
  }

  async fetchApi() {
    try {
      let response = await fetch(`${this.baseUrl}`);
      let getApi = await response.json();
      let countriesObj = { ...getApi };
      return countriesObj;
    } catch (error) {
      console.error(error);
    }
  }
}

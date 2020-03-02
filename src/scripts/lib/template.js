const Handlebars = require("handlebars");
export default class GenerateHtmlTemplate {
  constructor(templateID, destination) {
    this.templateID = templateID;
    this.destination = destination;
    this.handle();
  }

  async handle(countriesObject) {
    let source = document.getElementById(this.templateID).innerHTML;
    let template = Handlebars.compile(source);
    let context = await countriesObject;
    let output = template({
      countriesObject: context
    });
    this.destination.innerHTML = output;

    Handlebars.registerHelper("lang", function(languages) {
      return languages
        .map(element => {
          return element.name;
        })
        .join(", ");
    });
  }
}

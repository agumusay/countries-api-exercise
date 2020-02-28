const Handlebars = require("handlebars");
export default class GenerateHtmlTemplate {
  constructor(templateID, destination) {
    this.templateID = templateID;

    this.destination = destination;
    this.handle();
  }

  async handle(countriesObject, textElement) {
    let source = document.getElementById(this.templateID).innerHTML;
    console.log(source);
    let template = Handlebars.compile(source);

    let context = await countriesObject;
    let output = template({ countriesObject: context });
    console.log(output);
    this.destination.innerHTML = output;

    let spans = await Array.from(document.querySelectorAll(textElement));
    spans.map((ele, i) => {
      let spanWithCommas = document.querySelectorAll(textElement)[i];
      spanWithCommas.innerText = ele.innerText.split(" ").join(", ");
    });
  }
}

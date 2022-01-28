import Abstract from "./AbstractView.js";

export default class extends Abstract {
  constructor() {
    super();
    this.setTitle("Editor");
  }

  async getHtml() {
    return `
        <h1>Editor</h1>
        <a href="/" data-link>mainpage</a>
        `;
  }
}

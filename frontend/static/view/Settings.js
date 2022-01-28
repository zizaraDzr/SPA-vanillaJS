import Abstract from "./AbstractView.js";

export default class extends Abstract {
  constructor() {
    super();
    this.setTitle("Setting");
  }

  async getHtml() {
    return `
        <h1>Setting</h1>
        <a href="/editor" data-link>Editor</a>
        `;
  }
}

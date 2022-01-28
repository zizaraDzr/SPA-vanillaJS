import Abstract  from "./AbstractView.js";

export default class extends Abstract {
  constructor() {
      super()
    this.setTitle("Dasboard");
  }

  async getHtml() {
    return `
        <h1>Dasboard</h1>
        <a href="/editor" data-link>Editor</a>
        `;
  }
}

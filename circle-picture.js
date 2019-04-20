import { LitElement, html, css } from 'lit-element';

/**
 * `circle-picture`
 * Circle Picture
 *
 * @customElement
 * @polymer
 * @litElement
 * @demo demo/index.html
 */

 class CirclePicture extends LitElement {
  static get is() { return 'circle-picture'; }

  static get properties() {
    return {
      picture: { type: String },
      size: { type: Number },
      title: { type: String },
      subtitle: { type: String }
    };
  }

  static get styles(){
    return css`
      :host {
        display: block;
      }
      
      :host .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      
      :host .imgcont {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 3px solid #F00;
        overflow: hidden;
      }
      
      :host img {
        border-radius: 50%;
      }
      
      :host h2,
      :host h3 {
        margin: .2em;
      }
    `;
  }
  
  constructor() {
    super();
    this.picture = '';
    this.size = 200;
    this.title = 'FAKE TITLE';
    this.subtitle = 'Fake Subtitle';
  }

  render() {
    return html`
      <div class="container">
        <div class="imgcont" style="width:${this.size}px; height:${this.size}px">
          <img src="${this.picture}" width="${this.size}" />
        </div>
        <h2>${this.title}</h2>
        <h3>${this.subtitle}</h3>
      </div>
    `;
  }
}

window.customElements.define(CirclePicture.is, CirclePicture);
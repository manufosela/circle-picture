import { LitElement, html, css } from '/node_modules/lit-element/lit-element.js';

class CirclePicture extends Polymer.Element {
  static get is() { return 'circle-picture'; }

  static get properties() {
    return {
      picture: {
        type: String,
        value: '',
      },
      size: {
        type: Number,
        value: 200
      },
      title: {
        type: String,
        value: 'FAKE TITLE'
      },
      subtitle: {
        type: String,
        value: 'Fake Subtitle'
      }
    };
  }

  static get styles(){
    css`
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
  }

  render() {
    html`
      <div class="container">
        <div class="imgcont" style$="width:${this.size}px; height:${this.size}px">
          <img src="${this.picture}" width="${this.size}" />
        </div>
        <h2>${this.title}</h2>
        <h3>${this.subtitle}</h3>
      </div>
    `;
  }
}

window.customElements.define(CirclePicture.is, CirclePicture);
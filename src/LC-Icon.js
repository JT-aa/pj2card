/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

const question = new URL('../assets/question.svg', import.meta.url).href;

export class LCIcon extends SimpleColors {
  constructor() {
    super();
    this.image = question;
    this.dark = false;
  }

  static get tag() {
    return 'lc-icon';
  }

  static get properties() {
    return {
      ...super.properties,
      image: { type: String, attribute: 'image'},
      color: {type: String, attribute: 'String'}
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: inline-flex;
          flex-direction: row;
          height: var(--learning-card-height, 150px);
          width: var(--learning-card-width, 150px);
          /* background-color: #ffa500; */
        }
        span {
          display: inline-flex;
          height: var(--learning-card-height, 150px);
          width: var(--learning-card-width, 150px);
          justify-content: center;
          align-items: center;
        }
      `,
    ];
  }

  render() {
    return html`
      <div style="background-color: ${this.color}">
        <span><img src="${this.image}" alt="Icon" /></span>
      </div>
    `;
  }
}
customElements.define(LCIcon.tag, LCIcon);

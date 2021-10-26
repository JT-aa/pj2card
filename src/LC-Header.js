import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class LCHeader extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'pink';
    this.dark = false;
  }

  static get tag() {
    return 'lc-header';
  }

  static get properties() {
    return {
      ...super.properties,
      headername: { type: String, attributes: 'String'},
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          font-size: 40px;
        }
      `,
    ];
  }

  render() {
    return html`<div>${this.headername}<slot></slot></div>`;
  }
}
customElements.define(LCHeader.tag, LCHeader);

import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class LCBanner extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'blue';
    this.dark = false;
  }

  static get tag() {
    return 'lc-banner';
  }

  static get properties() {
    return {
      ...super.properties,
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          background-color: var(--simple-colors-default-theme-accent-8);
          color: var(--simple-colors-default-theme-grey-1);
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
        <p>banner from lc-banner.js<span></span></p>
      </div>
    `;
  }
}
customElements.define(LCBanner.tag, LCBanner);

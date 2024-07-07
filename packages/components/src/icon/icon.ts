import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'

@customElement('how-icon')
export class HowIcon extends LitElement {
  @property({ type: Number })
  size = 24

  @property({ type: String })
  color = '#2563eb'

  static styles = css`
    :host {
      display: contents
    }
  `

  render() {
    const iStyles = {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: `${this.size}px`,
      height: `${this.size}px`,
      fontSize: `${this.size}px`,
      color: this.color,
    }

    return html`
      <i style=${styleMap(iStyles)}>
        <slot></slot>
      </i>
    `
  }
}

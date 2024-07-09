import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'

@customElement('how-icon')
export class HowIcon extends LitElement {
  @property({ type: Number })
  size = 24

  @property({ type: String })
  color = 'var(--howui-icon-color-primary)'

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
      <i aria-hidden="true" style=${styleMap(iStyles)}>
        <slot></slot>
      </i>
    `
  }
}

declare global {

  interface HTMLElementTagNameMap {
    'how-icon': HowIcon
  }

  namespace JSX {
    interface IntrinsicElements {
      'how-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

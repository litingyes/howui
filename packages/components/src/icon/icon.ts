import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
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
    const classes = {
      'howui-icon': true,
    }

    const iconStyles = {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: `${this.size}px`,
      height: `${this.size}px`,
      fontSize: `${this.size}px`,
      color: this.color,
    }

    return html`
      <i part="howui-icon" class=${classMap(classes)} aria-hidden="true" style=${styleMap(iconStyles)}>
        <slot></slot>
      </i>
    `
  }
}

declare global {

  interface HTMLElementTagNameMap {
    'how-icon': HowIcon
  }

  namespace React.JSX {
    interface IntrinsicElements {
      'how-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

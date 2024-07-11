import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'

@customElement('how-button')
export class HowButton extends LitElement {
  @property({ type: String })
  type = 'default'

  @property({ type: String })
  size = 'md'

  static styles = css`
  :host {
    display: contents
  }

  .howui-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 400;
    transition: all 0.3s;
    color: var(--howui-button-color-default);
    background: var(--howui-button-bg-default);
    border:var(--howui-button-border-default);
  }

  .howui-button:hover {
    background: var(--howui-button-bg-hover-default);
  }

  .howui-button:active {
    background: var(--howui-button-bg-active-default);
  }

  .howui-button.primary {
    color: var(--howui-button-color-primary);
    background: var(--howui-button-bg-primary);
    border:var(--howui-button-border-primary);
  }

  .howui-button.primary:hover {
    background: var(--howui-button-bg-hover-primary);
  }

  .howui-button.primary:active {
    background: var(--howui-button-bg-active-primary);
  }
`

  render() {
    const classes = {
      'howui-button': true,
      'primary': this.type === 'primary',
    }

    const buttonStyles = {
      height: `var(--howui-button-size-${this.size})`,
      padding: `var(--howui-button-pd-${this.size})`,
      borderRadius: `var(--howui-button-br-${this.size})`,
      fontSize: `var(--howui-button-fs-${this.size})`,
      lineHeight: `var(--howui-button-lh-${this.size})`,
    }

    return html`
      <button class=${classMap(classes)} style=${styleMap(buttonStyles)}>
        <slot></slot>
      </button>
    `
  }
}

declare global {

  interface HTMLElementTagNameMap {
    'how-button': HowButton
  }

  namespace React.JSX {
    interface IntrinsicElements {
      'how-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

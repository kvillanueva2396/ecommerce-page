import { html, LitElement } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import styles from './EcommerceOverlay.css'

export class EcommerceOverlay extends LitElement {
	static get properties() {
		return {
			isVisible: { type: Boolean, attribute: 'is-visible' },
		}
	}

	static get styles() {
		return [styles]
	}

	get overlayClasses() {
		return {
			overlay: true,
			'overlay--visible': this.isVisible,
		}
	}

	render() {
		return html`<div class=${classMap(this.overlayClasses)}></div>`
	}
}

customElements.define('ecommerce-overlay', EcommerceOverlay)

import { LitElement, html, css } from 'lit'
import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

export class EcommerceMobileMenu extends LitElement {
	// @property({ type: Boolean, reflect: true, attribute: 'is-open' })
	// isOpen = false

	isOpen: boolean

	static get properties() {
		return {
			isOpen: { type: Boolean, attribute: 'is-open', reflect: true },
		}
	}

	constructor() {
		super()
		this.isOpen = false
	}

	static styles = css`
		.ecommerce-mobile-menu {
			position: absolute;
			top: 0;
			left: 0;
			transition: transform 0.3s ease-in-out;
		}
		.ecommerce-mobile-menu--closed {
			transform: translateX(-100%);
		}
		.ecommerce-mobile-menu--open {
			transform: translateX(0);
		}
	`

	render() {
		const classes = {
			'ecommerce-mobile-menu': true,
			'ecommerce-mobile-menu--closed': !this.isOpen,
			'ecommerce-mobile-menu--open': this.isOpen,
		}

		return html` <div class=${classMap(classes)}>Mobile Menu</div> `
	}
}

customElements.define('ecommerce-mobile-menu', EcommerceMobileMenu)

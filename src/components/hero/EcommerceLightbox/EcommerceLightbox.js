import { html, LitElement } from 'lit'
import { EcommerceOverlay } from '../../common/EcommerceOverlay/EcommerceOverlay'
import styles from './EcommerceLightbox.css'

export class EcommerceLightbox extends LitElement {
	static get properties() {
		return {
			isOpen: { type: Boolean, attribute: 'is-open' },
		}
	}

	constructor() {
		super()
		this.isOpen = false
	}

	static get styles() {
		return [styles]
	}

	render() {
		return html` <ecommerce-overlay ?is-visible=${this.isOpen}></ecommerce-overlay> `
	}
}

customElements.define('ecommerce-lightbox', EcommerceLightbox)

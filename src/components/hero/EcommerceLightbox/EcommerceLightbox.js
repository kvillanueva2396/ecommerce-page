import { html, LitElement } from 'lit'
import { EcommerceOverlay } from '../../common/EcommerceOverlay/EcommerceOverlay'
import { EcommerceCarousel } from '../EcommerceCarousel/EcommerceCarousel'
import styles from './EcommerceLightbox.css'

export class EcommerceLightbox extends LitElement {
	static get properties() {
		return {
			isOpen: { type: Boolean, attribute: 'is-open' },
			images: { type: Array },
		}
	}

	constructor() {
		super()
		this.isOpen = false
		this.images = []
	}

	static get styles() {
		return [styles]
	}

	render() {
		return html`
			<ecommerce-overlay ?is-visible=${this.isOpen}>
				<ecommerce-carousel .images=${this.images}></ecommerce-carousel>
			</ecommerce-overlay>
		`
	}
}

customElements.define('ecommerce-lightbox', EcommerceLightbox)

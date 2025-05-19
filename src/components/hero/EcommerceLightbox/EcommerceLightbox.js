import { html, LitElement } from 'lit'
import { EcommerceOverlay } from '../../common/EcommerceOverlay/EcommerceOverlay'
import { EcommerceCarousel } from '../EcommerceCarousel/EcommerceCarousel'
import { EcommerceThumbnailBar } from '../EcommerceThumbnailBar/EcommerceThumbnailBar'
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

	_handleCloseLightbox() {
		this.dispatchEvent(
			new CustomEvent('on-close-lightbox', {
				detail: false,
				bubbles: true,
				composed: true,
			})
		)
	}

	render() {
		return html`
			<ecommerce-overlay ?is-visible=${this.isOpen}>
				<div class="lightbox">
					<button @click=${this._handleCloseLightbox}>
						<img src="/icon-close.svg" alt="icon close" />
					</button>
					<div class="lightbox__carousel">
						<ecommerce-carousel .images=${this.images}></ecommerce-carousel>
					</div>
					<div class="lightbox__thumbnail-bar">
						<ecommerce-thumbnail-bar .images=${this.images}></ecommerce-thumbnail-bar>
					</div>
				</div>
			</ecommerce-overlay>
		`
	}
}

customElements.define('ecommerce-lightbox', EcommerceLightbox)

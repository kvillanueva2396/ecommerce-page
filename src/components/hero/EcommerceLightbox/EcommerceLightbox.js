import { html, LitElement } from 'lit'
import { EcommerceOverlay } from '../../common/EcommerceOverlay/EcommerceOverlay'
import { EcommerceCarousel } from '../EcommerceCarousel/EcommerceCarousel'
import { EcommerceThumbnailBar } from '../EcommerceThumbnailBar/EcommerceThumbnailBar'
import { IconClose } from '../../common/Icons/IconClose'
import styles from './EcommerceLightbox.css'

export class EcommerceLightbox extends LitElement {
	static get properties() {
		return {
			isOpen: { type: Boolean, attribute: 'is-open' },
			images: { type: Array },
			_currentIndex: { type: Number, state: true },
		}
	}

	constructor() {
		super()
		this.isOpen = false
		this.images = []
		this._currentIndex = 0
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

	_handleGetCurrentImageIndex(event) {
		this._currentIndex = event.detail
	}

	render() {
		return html`
			<ecommerce-overlay ?is-visible=${this.isOpen}>
				<div class="lightbox">
					<button class="lightbox__close-button" @click=${this._handleCloseLightbox}>
						<icon-close style="--icon-color: #fff; --icon-hover-color: #FF7D1A;"></icon-close>
					</button>
					<div class="lightbox__carousel">
						<ecommerce-carousel
							.images=${this.images}
							.currentIndex=${this._currentIndex}
							@on-get-current-index=${this._handleGetCurrentImageIndex}
						></ecommerce-carousel>
					</div>
					<div class="lightbox__thumbnail-bar">
						<ecommerce-thumbnail-bar
							.images=${this.images}
							.currentIndex=${this._currentIndex}
							@on-get-current-index=${this._handleGetCurrentImageIndex}
						></ecommerce-thumbnail-bar>
					</div>
				</div>
			</ecommerce-overlay>
		`
	}
}

customElements.define('ecommerce-lightbox', EcommerceLightbox)

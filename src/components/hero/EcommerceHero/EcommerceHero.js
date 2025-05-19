import { html, LitElement } from 'lit'
import { EcommerceCarousel } from '../EcommerceCarousel/EcommerceCarousel'
import { EcommerceProductInfo } from '../EcommerceProductInfo/EcommerceProductInfo'
import { EcommerceThumbnailBar } from '../EcommerceThumbnailBar/EcommerceThumbnailBar'
import { EcommerceLightbox } from '../EcommerceLightbox/EcommerceLightbox'
import styles from './EcommerceHero.css'

export class EcommerceHero extends LitElement {
	static get properties() {
		return {
			product: { type: Object, attribute: 'product' },
			_currentIndex: { type: Number },
			_isLightboxOpen: { type: Boolean, state: true },
		}
	}

	constructor() {
		super()
		this.product = {}
		this._currentIndex = 0
	}

	static get styles() {
		return [styles]
	}

	get _getProductImages() {
		return this.product.images
	}

	get _getCurrentImage() {
		return this._getProductImages ? this.product.images[this._currentIndex] : null
	}

	_handleGetProductToBasket(event) {
		const productWithQuantityToBasket = event.detail
		this.dispatchEvent(
			new CustomEvent('on-get-product-to-basket', {
				detail: productWithQuantityToBasket,
				bubbles: true,
				composed: true,
			})
		)
	}

	_handleClickBigImage() {
		this._isLightboxOpen = true
	}

	_handleGetCurrentIndex(event) {
		this._currentIndex = event.detail
	}

	_handleCloseLightbox() {
		this._isLightboxOpen = false
	}

	render() {
		return html` <div class="carousel">
				<ecommerce-carousel .images=${this._getProductImages}></ecommerce-carousel>
			</div>
			<ecommerce-lightbox
				?is-open=${this._isLightboxOpen}
				.images=${this._getProductImages}
				@on-close-lightbox=${this._handleCloseLightbox}
			></ecommerce-lightbox>
			<div class="ecommerce-hero">
				<div class="hero-images">
					<div class="big-image-wrapper" @click=${this._handleClickBigImage}>
						<img class="big-image" src=${this._getCurrentImage} alt="product image" />
					</div>
					<ecommerce-thumbnail-bar
						.images=${this._getProductImages}
						@on-get-current-index=${this._handleGetCurrentIndex}
					></ecommerce-thumbnail-bar>
				</div>
				<div class="ecommerce-hero__product-info">
					<ecommerce-product-info
						.product=${this.product}
						@on-get-product-to-basket=${this._handleGetProductToBasket}
					></ecommerce-product-info>
				</div>
			</div>`
	}
}

customElements.define('ecommerce-hero', EcommerceHero)

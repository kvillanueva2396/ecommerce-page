import { html, LitElement } from 'lit'
import styles from './EcommerceCarousel.css'

export class EcommerceCarousel extends LitElement {
	static get properties() {
		return {
			images: { type: Array, attribute: 'images' },
			isMobile: { type: Boolean, attribute: 'is-mobile' },
			currentIndex: { type: Number },
		}
	}

	static get styles() {
		return [styles]
	}

	constructor() {
		super()
		this.images = []
		this.isMobile = false
		this.currentIndex = 0
	}

	get _getCurrentImage() {
		return html`<img
			class="carousel-image"
			src=${this.images[this.currentIndex]}
			alt="image carousel"
		/>`
	}

	get _getNavButtons() {
		return this.images?.length > 1
			? html`
					<button class="nav-button nav-button--prev" @click=${this._handlePrev}>
						<img src="/icon-previous.svg" alt="previos button" />
					</button>
					<button class="nav-button nav-button--next" @click=${this._handleNext}>
						<img src="/icon-next.svg" alt="previos button" />
					</button>
			  `
			: null
	}

	_onGetCurrentIndex(currentIndex) {
		this.dispatchEvent(
			new CustomEvent('on-get-current-index', {
				detail: currentIndex,
				bubbles: true,
				composed: true,
			})
		)
	}

	_handlePrev() {
		if (this.currentIndex > 0) {
			this.currentIndex--
			this._onGetCurrentIndex(this.currentIndex)
		}
	}

	_handleNext() {
		if (this.currentIndex < this.images.length - 1) {
			this.currentIndex++
			this._onGetCurrentIndex(this.currentIndex)
		}
	}

	render() {
		return html`
			<div class="carousel-wrapper">${this._getCurrentImage}</div>
			${this._getNavButtons}
		`
	}
}

customElements.define('ecommerce-carousel', EcommerceCarousel)

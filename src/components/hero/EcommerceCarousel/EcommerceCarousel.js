import { html, LitElement } from 'lit'
import { styleMap } from 'lit/directives/style-map.js'
import styles from './EcommerceCarousel.css'

export class EcommerceCarousel extends LitElement {
	static get properties() {
		return {
			images: { type: Array, attribute: 'images' },
			isMobile: { type: Boolean, attribute: 'is-mobile' },
			_currentIndex: { type: Number, state: true },
		}
	}

	static get styles() {
		return [styles]
	}

	constructor() {
		super()
		this.images = []
		this.isMobile = false
		this._currentIndex = 0
	}

	get _getImages() {
		return this.images?.map(
			imgSrc => html`<img class="carousel-image" src=${imgSrc} alt="image carousel" />`
		)
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

	get _getTranslateX() {
		return `translateX(-${this._currentIndex * 100}%)`
	}

	_handlePrev() {
		this._currentIndex = Math.max(0, this._currentIndex - 1)
	}

	_handleNext() {
		this._currentIndex = Math.min(this.images.length - 1, this._currentIndex + 1)
	}

	render() {
		return html`
			<div class="carousel-wrapper" style=${styleMap({ transform: this._getTranslateX })}>
				${this._getImages}
			</div>
			${this._getNavButtons}
		`
	}
}

customElements.define('ecommerce-carousel', EcommerceCarousel)

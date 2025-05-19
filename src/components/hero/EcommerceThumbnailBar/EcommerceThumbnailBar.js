import { html, LitElement } from 'lit'
import styles from './EcommerceThumbnailBar.css'

export class EcommerceThumbnailBar extends LitElement {
	static get properties() {
		return {
			images: { type: Array },
			_currentIndex: { type: Number, state: true },
		}
	}

	constructor() {
		super()
		this.images = []
		this._currentIndex = 0
	}

	static get styles() {
		return [styles]
	}

	_handleClickThumbnail(currentIndex) {
		this.dispatchEvent(
			new CustomEvent('on-get-current-index', {
				detail: currentIndex,
				bubbles: true,
				composed: true,
			})
		)
	}

	render() {
		return html`<ul class="thumbnail-bar-wrapper">
			${this.images?.length > 0
				? this.images.map(
						(thumbnail, index) =>
							html`<li class="thumbnail" @click=${() => this._handleClickThumbnail(index)}>
								<img class="thumbnail__image" src=${thumbnail} alt="thumbnail" />
							</li>`
				  )
				: ''}
		</ul>`
	}
}

customElements.define('ecommerce-thumbnail-bar', EcommerceThumbnailBar)

import { html, LitElement } from 'lit'
import { EcommerceThumbnail } from '../EcommerceThumbnail/EcommerceThumbnail'
import styles from './EcommerceThumbnailBar.css'

export class EcommerceThumbnailBar extends LitElement {
	static get properties() {
		return {
			images: { type: Array },
			currentIndex: { type: Number },
		}
	}

	constructor() {
		super()
		this.images = []
		this.currentIndex = 0
	}

	static get styles() {
		return [styles]
	}

	_handleClickThumbnail(currentIndex) {
		this.currentIndex = currentIndex
		this.dispatchEvent(
			new CustomEvent('on-get-current-index', {
				detail: currentIndex,
				bubbles: true,
				composed: true,
			})
		)
	}

	get _thumbnailClasses() {
		return {
			thumbnail: true,
		}
	}

	render() {
		return html`<ul class="thumbnail-bar-wrapper">
			${this.images?.length > 1
				? this.images.map(
						(thumbnailSrc, index) =>
							html`<li>
								<ecommerce-thumbnail
									.thumbnailSrc=${thumbnailSrc}
									?is-selected=${this.currentIndex === index}
									@click=${() => this._handleClickThumbnail(index)}
								></ecommerce-thumbnail>
							</li>`
				  )
				: ''}
		</ul>`
	}
}

customElements.define('ecommerce-thumbnail-bar', EcommerceThumbnailBar)

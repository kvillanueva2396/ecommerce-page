import { html, LitElement } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import styles from './EcommerceThumbnail.css'

export class EcommerceThumbnail extends LitElement {
	static get properties() {
		return {
			thumbnailSrc: { type: String, attribute: 'thumbnail-src' },
			isSelected: { type: Boolean, attribute: 'is-selected' },
		}
	}

	constructor() {
		super()
		this.thumbnailSrc = ''
		this.isSelected = false
	}

	static get styles() {
		return [styles]
	}

	get _thumbnailClasses() {
		return {
			thumbnail: true,
			'thumbnail--selected': this.isSelected,
		}
	}

	get _thumbnailImageClasses() {
		return {
			thumbnail__image: true,
			'thumbnail__image--selected': this.isSelected,
		}
	}

	render() {
		return html`
			<span class=${classMap(this._thumbnailClasses)}>
				<img
					class=${classMap(this._thumbnailImageClasses)}
					src=${this.thumbnailSrc}
					alt="thumbnail"
				/>
			</span>
		`
	}
}

customElements.define('ecommerce-thumbnail', EcommerceThumbnail)

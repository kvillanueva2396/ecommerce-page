import { html, LitElement } from 'lit'
import styles from './EcommerceThumbnailBar.css'

export class EcommerceThumbnailBar extends LitElement {
	static get properties() {
		return {
			images: { type: Array },
		}
	}

	constructor() {
		super()
		this.images = []
	}

	static get styles() {
		return [styles]
	}

	render() {
		return html`<ul class="thumbnail-bar-wrapper">
			${this.images?.length > 0
				? this.images.map(
						thumbnail => html`<li><img class="thumbnail" src=${thumbnail} alt="thumbnail" /></li>`
				  )
				: ''}
		</ul>`
	}
}

customElements.define('ecommerce-thumbnail-bar', EcommerceThumbnailBar)

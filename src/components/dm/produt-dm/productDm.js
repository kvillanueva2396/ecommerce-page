import { LitElement } from 'lit'

export class ProductDm extends LitElement {
	static get properties() {
		return {
			host: { type: String },
		}
	}

	constructor() {
		super()
		this.host = ''
	}

	async getProduct() {
		try {
			const response = await fetch(this.host)

			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			const data = await response.json()
			this.dispatchEvent(
				new CustomEvent('on-get-product-data', {
					detail: data,
					bubbles: true,
					composed: true,
				})
			)
		} catch (error) {
			console.error(error)
		}
	}

	// firstUpdated() {
	// 	this.getProduct()
	// }
}

customElements.define('product-dm', ProductDm)

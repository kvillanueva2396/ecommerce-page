import { LitElement } from 'lit'

export class ProductDm extends LitElement {
	host: string

	static get properties() {
		return {
			host: { type: String },
		}
	}

	constructor() {
		super()
		this.host = ''
	}

	public async getProduct() {
		try {
			const response = await fetch(this.host)

			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			const data = await response.json()
			console.log(data)
		} catch (error) {
			console.error(error)
		}
	}

	// firstUpdated() {
	// 	this.getProduct()
	// }
}

customElements.define('product-dm', ProductDm)

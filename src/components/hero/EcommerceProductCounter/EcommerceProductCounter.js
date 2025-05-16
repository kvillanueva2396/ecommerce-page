import { html, LitElement } from 'lit'

export class EcommerceProductCounter extends LitElement {
	static get properties() {
		return {
			_quantity: { type: Number, state: true },
		}
	}

	constructor() {
		super()
		this._quantity = 0
	}

	render() {
		return html`
			<div>
				<button><img src="/icon-minus.svg" alt="icon minus" /></button>
				<span>${this._quantity}</span>
				<button><img src="/icon-plus.svg" alt="icon plus" /></button>
			</div>
		`
	}
}

customElements.define('ecommerce-product-counter', EcommerceProductCounter)

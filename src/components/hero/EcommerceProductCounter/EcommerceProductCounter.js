import { html, LitElement } from 'lit'
import styles from './EcommerceProductCounter.css'

export class EcommerceProductCounter extends LitElement {
	static get properties() {
		return {
			quantity: { type: Number, state: true },
		}
	}

	constructor() {
		super()
		this.quantity = 0
	}

	static get styles() {
		return [styles]
	}

	_descreaseCount() {
		if (this.quantity > 0) --this.quantity
		// this._getQuantity()
	}

	_increaseCount() {
		++this.quantity
		// this._getQuantity()
	}

	// _getQuantity() {
	// 	this.dispatchEvent(new CustomEvent('on-get-quantity'), {
	// 		detail: this._quantity,
	// 		bubbles: true,
	// 		composed: true,
	// 	})
	// }

	render() {
		return html`
			<div class="counter">
				<button class="counter-button" @click=${this._descreaseCount}>
					<img src="/icon-minus.svg" alt="icon minus" />
				</button>
				<span>${this.quantity}</span>
				<button class="counter-button" @click=${this._increaseCount}>
					<img src="/icon-plus.svg" alt="icon plus" />
				</button>
			</div>
		`
	}
}

customElements.define('ecommerce-product-counter', EcommerceProductCounter)

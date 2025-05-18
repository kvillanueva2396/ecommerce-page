import { html, LitElement } from 'lit'
import styles from './EcommerceBasketItem.css'

export class EcommerceBasketItem extends LitElement {
	static get properties() {
		return {
			product: { type: Object },
		}
	}

	constructor() {
		super()
		this.product = {}
	}

	static get styles() {
		return [styles]
	}

	get _getThumbnail() {
		return this.product ? this.product.data.images[0] : null
	}

	get _getTotalPrice() {
		const { price } = this.product.data
		const { quantity } = this.product
		const totalPrice = price * quantity

		if (quantity > 1) {
			return html`<p>
				$${price.toFixed(2)} x ${quantity} <b class="total-price">$${totalPrice.toFixed(2)}</b>
			</p>`
		} else {
			return html`<p><b class="total-price">$${price.toFixed(2)}</b></p>`
		}
	}

	render() {
		return html` <div class="basket-item-data-wrapper">
				<img class="basket-item__thumbnail" src=${this._getThumbnail} alt="thumbnail" />
				<div class="basket-item__data">
					<p>${this.product.data.title}</p>
					${this._getTotalPrice}
				</div>
			</div>
			<button class="delete-button">
				<img src="/icon-delete.svg" alt="delete icon" />
			</button>`
	}
}

customElements.define('ecommerce-basket-item', EcommerceBasketItem)

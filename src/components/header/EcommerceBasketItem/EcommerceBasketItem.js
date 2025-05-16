import { html, LitElement } from 'lit'
import styles from './EcommerceBasketItem.css'

export class EcommerceBasketItem extends LitElement {
	static get styles() {
		return [styles]
	}

	render() {
		return html`<div>Basket Item</div>`
	}
}

customElements.define('ecommerce-basket-item', EcommerceBasketItem)

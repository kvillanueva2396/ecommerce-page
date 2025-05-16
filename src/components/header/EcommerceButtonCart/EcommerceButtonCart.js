import { LitElement, html } from 'lit'
import { EcommerceBadge } from '../EcommerceBadge/EcommerceBadge'
import { EcommerceBasket } from '../EcommerceBasket/EcommerceBasket'
import styles from './EcommerceButtonCart.css'

export class EcommerceButtonCart extends LitElement {
	static get styles() {
		return [styles]
	}

	_handleCartClick() {
		console.log('cart click')
	}

	render() {
		return html`
			<button class="ecommerce-button-cart" @click=${this._handleCartClick}>
				<img src="/icon-cart.svg" alt="icon cart" class="ecommerce-header-cart__icon" />
				<!-- <ecommerce-badge quantity="2"></ecommerce-badge> -->
			</button>
			<ecommerce-basket></ecommerce-basket>
		`
	}
}

customElements.define('ecommerce-button-cart', EcommerceButtonCart)

import { LitElement, html } from 'lit'
import { EcommerceBadge } from '../EcommerceBadge/EcommerceBadge'
import { EcommerceBasket } from '../EcommerceBasket/EcommerceBasket'
import styles from './EcommerceButtonCart.css'

export class EcommerceButtonCart extends LitElement {
	static get properties() {
		return {
			productSelected: { type: Object },
			_isBasketOpen: { type: Boolean, attribute: 'is-basket-open' },
		}
	}

	constructor() {
		super()
		this.productSelected = {}
		this._isBasketOpen = false
	}

	static get styles() {
		return [styles]
	}

	get _getBadge() {
		return this.productSelected.quantity > 0
			? html`<ecommerce-badge .quantity=${this.productSelected.quantity}></ecommerce-badge>`
			: null
	}

	_handleCartClick() {
		this._isBasketOpen = !this._isBasketOpen
	}

	render() {
		return html`
			<button class="ecommerce-button-cart" @click=${this._handleCartClick}>
				<img src="/icon-cart.svg" alt="icon cart" class="ecommerce-header-cart__icon" />
				${this._getBadge}
			</button>
			<ecommerce-basket
				.productSelected=${this.productSelected}
				?is-basket-open=${this._isBasketOpen}
			></ecommerce-basket>
		`
	}
}

customElements.define('ecommerce-button-cart', EcommerceButtonCart)

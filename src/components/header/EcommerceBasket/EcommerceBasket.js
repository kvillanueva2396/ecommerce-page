import { html, LitElement } from 'lit'
import { EcommerceBasketItem } from '../EcommerceBasketItem/EcommerceBasketItem'
import { EcommerceButton } from '../../common/EcommerceButton/EcommerceButton'
import styles from './EcommerceBasket.css'
import { classMap } from 'lit/directives/class-map.js'
import { isEmptyObject } from '../../../utils/object-utils'

export class EcommerceBasket extends LitElement {
	static get properties() {
		return {
			productSelected: { type: Object },
			isBasketOpen: { type: Boolean, attribute: 'is-basket-open' },
		}
	}

	constructor() {
		super()
		this.productSelected = {}
		this.isBasketOpen = false
	}

	static get styles() {
		return [styles]
	}

	get basketClasses() {
		return {
			'ecommerce-basket': true,
			'ecommerce-basket--open': this.isBasketOpen,
		}
	}

	_handleDeleteProduct(event) {
		this.productSelected = {}
		const product = event.detail
		this.dispatchEvent(
			new CustomEvent('on-delete-product', {
				detail: product,
				bubbles: true,
				composed: true,
			})
		)
	}

	get _getProducts() {
		return isEmptyObject(this.productSelected)
			? html`<p class="empty-text">Your cart is empty.</p>`
			: html`
					<ecommerce-basket-item
						.product=${this.productSelected}
						@on-delete-product=${this._handleDeleteProduct}
					></ecommerce-basket-item
					><ecommerce-button>Checkout</ecommerce-button>
			  `
	}

	render() {
		return html`
			<div class=${classMap(this.basketClasses)}>
				<p class="ecommerce-basket__title">Cart</p>
				<hr class="separator" />
				<div class="ecommerce-basket__body">${this._getProducts}</div>
			</div>
		`
	}
}

customElements.define('ecommerce-basket', EcommerceBasket)

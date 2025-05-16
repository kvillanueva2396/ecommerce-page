import { html, LitElement } from 'lit'
import styles from './EcommerceBasket.css'
import { classMap } from 'lit/directives/class-map.js'

export class EcommerceBasket extends LitElement {
	static get properties() {
		return {
			isBasketOpen: { type: Boolean, attribute: 'is-basket-open' },
		}
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

	render() {
		return html`
			<div class=${classMap(this.basketClasses)}>
				<p class="ecommerce-basket__title">Cart</p>
				<hr class="separator" />
				<div class="ecommerce-basket__body">
					<p class="empty-text">Your cart is empty.</p>
				</div>
			</div>
		`
	}
}

customElements.define('ecommerce-basket', EcommerceBasket)

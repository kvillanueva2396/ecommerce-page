import { html, LitElement } from 'lit'
import { EcommerceProductCounter } from '../EcommerceProductCounter/EcommerceProductCounter'
import { EcommerceButton } from '../../common/EcommerceButton/EcommerceButton'
import styles from './EcommerceProductInfo.css'

export class EcommerceProductInfo extends LitElement {
	static get properties() {
		return {
			product: { type: Object, attribute: 'product' },
		}
	}

	constructor() {
		super()
		this.product = {}
	}

	static get styles() {
		return [styles]
	}

	render() {
		return html`
			<div class="product-info">
				<p class="product-info__company">SNEAKER COMPANY</p>
				<h2 class="product-info__title">${this.product.title}</h2>
				<p class="product-info__description">${this.product.description}</p>
				<div class="prices-wrapper">
					<div class="new-price-wrapper">
						<span class="new-price">$${(this.product.price / 2).toFixed(2)}</span>
						<span class="discount">50%</span>
					</div>
					<span class="price">$${this.product.price?.toFixed(2)}</span>
				</div>
				<ecommerce-product-counter></ecommerce-product-counter>
				<ecommerce-button>Hola</ecommerce-button>
			</div>
		`
	}
}

customElements.define('ecommerce-product-info', EcommerceProductInfo)

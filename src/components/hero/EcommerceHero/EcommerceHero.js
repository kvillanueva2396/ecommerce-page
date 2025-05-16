import { html, LitElement } from 'lit'
import { EcommerceMobileCarousel } from '../EcommerceMobileCarousel/EcommerceMobileCarousel'
import { EcommerceProductInfo } from '../EcommerceProductInfo/EcommerceProductInfo'

export class EcommerceHero extends LitElement {
	static get properties() {
		return {
			product: { type: Object, attribute: 'product' },
		}
	}

	constructor() {
		super()
		this.product = {}
	}

	get _getProductImages() {
		return this.product.images
	}

	render() {
		return html`<div>
			<ecommerce-mobile-carousel .images=${this._getProductImages}></ecommerce-mobile-carousel>
			<ecommerce-product-info .product=${this.product}></ecommerce-product-info>
		</div>`
	}
}

customElements.define('ecommerce-hero', EcommerceHero)

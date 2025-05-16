import { LitElement, html } from 'lit'
import { EcommerceHeader } from '../src/components/header'
import { EcommerceHero } from './components/hero'
import { ProductDm } from './components/dm/produt-dm/productDm'
import styles from './EcommercePage.css.js'

export class EcommercePage extends LitElement {
	static get properties() {
		return {
			_product: { type: Object, attribute: 'product' },
		}
	}

	constructor() {
		super()
		this._host = 'https://api.escuelajs.co/api/v1/products/34'
		this._product = {}
	}

	async firstUpdated() {
		await this.updateComplete
		const productDm = this.shadowRoot.getElementById('product-dm')
		productDm.host = this._host
		productDm.getProduct()
		productDm.addEventListener('on-get-product-data', event => {
			console.log(event.detail)

			this._product = event.detail
		})
	}

	get _getRenderDm() {
		return html`<product-dm id="product-dm"></product-dm>`
	}

	static get styles() {
		return [styles]
	}

	render() {
		return html` <div class="ecommerce-page">
			${this._getRenderDm}
			<ecommerce-header></ecommerce-header>
			<hr class="separator" />
			<ecommerce-hero .product=${this._product}></ecommerce-hero>
		</div>`
	}
}

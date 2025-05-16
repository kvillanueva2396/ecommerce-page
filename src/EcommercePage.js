import { LitElement, html } from 'lit'
import { EcommerceHeader } from '../src/components/header'
import { EcommerceHero } from './components/hero'
import { ProductDm } from './components/dm/produt-dm/productDm'
import styles from './EcommercePage.css.js'

export class EcommercePage extends LitElement {
	static get properties() {
		return {
			_host: { type: String, state: true },
			_product: { type: Object, state: true },
			_productSelected: { type: Object, state: true },
		}
	}

	constructor() {
		super()
		this._host = 'https://api.escuelajs.co/api/v1/products/4'
		this._product = {}
		this._productSelected = {}
	}

	async firstUpdated() {
		await this.updateComplete
		const productDm = this.shadowRoot.getElementById('product-dm')
		productDm.host = this._host
		productDm.getProduct()
		productDm.addEventListener('on-get-product-data', event => {
			this._product = event.detail
		})
	}

	get _getRenderDm() {
		return html`<product-dm id="product-dm"></product-dm>`
	}

	static get styles() {
		return [styles]
	}

	_handleGetProductToBasket(event) {
		this._productSelected = event.detail
	}

	render() {
		return html` <div class="ecommerce-page">
			${this._getRenderDm}
			<ecommerce-header .productSelected=${this._productSelected}></ecommerce-header>
			<hr class="separator" />
			<ecommerce-hero
				.product=${this._product}
				@on-get-product-to-basket=${this._handleGetProductToBasket}
			></ecommerce-hero>
		</div>`
	}
}

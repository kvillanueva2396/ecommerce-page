import { LitElement, html } from 'lit'
import { EcommerceHeader } from '../src/components/header'
import { EcommerceHero } from './components/hero'
import { ProductDm } from './components/dm/produt-dm/productDm'
import styles from './EcommercePage.css.js'
import { isEmptyObject } from './utils/object-utils.js'
import { Constants } from './utils/constants'

export class EcommercePage extends LitElement {
	static get properties() {
		return {
			_host: { type: String, state: true },
			_product: { type: Object, state: true },
			_productSelected: { type: Object, state: true },
			_errorMessage: { type: String, state: true },
		}
	}

	constructor() {
		super()
		this._host = 'https://api.escuelajs.co/api/v1/products/27'
		this._product = {}
		this._productSelected = {}
		this._errorMessage = ''
	}

	async firstUpdated() {
		await this.updateComplete
		const productDm = this.shadowRoot.getElementById('product-dm')
		productDm.host = this._host
		productDm.getProduct()
		productDm.addEventListener('on-get-product-data', event => {
			this._product = event.detail
		})
		productDm.addEventListener('on-get-error', event => {
			console.log(event)
		})
		const productSelected = localStorage.getItem(Constants.PRODUCT_SELECTED)
		if (productSelected) this._productSelected = JSON.parse(productSelected)
	}

	get _getRenderDm() {
		return html`<product-dm id="product-dm"></product-dm>`
	}

	get _getEcommerceHero() {
		return !isEmptyObject(this._product)
			? html`<ecommerce-hero
					.product=${this._product}
					@on-get-product-to-basket=${this._handleGetProductToBasket}
			  ></ecommerce-hero>`
			: html`<p class="empty-product">Product not founded</p>`
	}

	static get styles() {
		return [styles]
	}

	_handleGetProductToBasket(event) {
		this._productSelected = event.detail
		console.log(this._productSelected)
		localStorage.setItem(Constants.PRODUCT_SELECTED, JSON.stringify(this._productSelected))
	}

	_handleDeleteProduct(event) {
		console.log('deleted productId: ', event.detail.id)
		localStorage.removeItem(Constants.PRODUCT_SELECTED)
		this._productSelected = {}
	}

	render() {
		return html` <div class="ecommerce-page">
			${this._getRenderDm}
			<ecommerce-header
				.productSelected=${this._productSelected}
				@on-delete-product=${this._handleDeleteProduct}
			></ecommerce-header>
			<hr class="separator" />
			${this._getEcommerceHero}
		</div>`
	}
}

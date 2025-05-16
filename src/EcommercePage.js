import { LitElement, html } from 'lit'
import { EcommerceHeader } from '@/components/header/EcommerceHeader/EcommerceHeader.js'
import { ProductDm } from './components/dm/produt-dm/productDm'
import styles from './EcommercePage.css.js'

export class EcommercePage extends LitElement {
	constructor() {
		super()
		this._host = 'https://api.escuelajs.co/api/v1/products/4'
	}

	async firstUpdated() {
		await this.updateComplete
		const productDm = this.shadowRoot?.getElementById('product-dm')
		productDm.host = this._host
		productDm?.getProduct()
	}

	get _getRenderDm() {
		return html`<product-dm id="product-dm"></product-dm>`
	}

	static get styles() {
		return [styles]
	}

	render() {
		return html` <div class="ecommerce-page">
			<ecommerce-header></ecommerce-header>
			<hr class="separator" />
			${this._getRenderDm}
		</div>`
	}
}

import { LitElement, html } from 'lit'
import { EcommerceHeader } from '@/components/header/EcommerceHeader'
import { ProductDm } from './components/dm/produt-dm/productDm'

export class EcommercePage extends LitElement {
	private _host: string
	constructor() {
		super()
		this._host = 'https://api.escuelajs.co/api/v1/products/4'
	}

	async firstUpdated() {
		await this.updateComplete
		const productDm = this.shadowRoot?.getElementById('product-dm') as ProductDm
		productDm.host = this._host
		productDm?.getProduct()
	}

	get _getRenderDm() {
		return html`<product-dm id="product-dm"></product-dm>`
	}

	render() {
		return html` <div>
			<ecommerce-header></ecommerce-header>
			${this._getRenderDm}
		</div>`
	}
}

customElements.define('ecommerce-page', EcommercePage)

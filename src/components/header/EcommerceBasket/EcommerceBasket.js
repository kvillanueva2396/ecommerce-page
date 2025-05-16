import { html, LitElement } from 'lit'
import styles from './EcommerceBasket.css'

export class EcommerceBasket extends LitElement {
	static get styles() {
		return [styles]
	}

	render() {
		return html` <div>Basket</div> `
	}
}

customElements.define('ecommerce-basket', EcommerceBasket)

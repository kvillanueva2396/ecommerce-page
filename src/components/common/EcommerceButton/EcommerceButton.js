import { html, LitElement } from 'lit'

export class EcommerceButton extends LitElement {
	render() {
		return html` <button class="ecommerce-button"><slot></slot></button> `
	}
}

customElements.define('ecommerce-button', EcommerceButton)

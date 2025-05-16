import { html, LitElement } from 'lit'
import styles from './EcommerceButton.css'

export class EcommerceButton extends LitElement {
	static get styles() {
		return [styles]
	}

	render() {
		return html` <button class="ecommerce-button"><slot></slot></button> `
	}
}

customElements.define('ecommerce-button', EcommerceButton)

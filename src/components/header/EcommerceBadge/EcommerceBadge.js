import { html, LitElement } from 'lit'
import styles from './EcommerceBadge.css'

export class EcommerceBadge extends LitElement {
	static get properties() {
		return {
			quantity: { type: Number },
		}
	}

	constructor() {
		super()
		this.quantity = 3
	}

	static get styles() {
		return [styles]
	}

	render() {
		return html`<div class="ecommerce-badge">
			<span>${this.quantity}</span>
		</div>`
	}
}

customElements.define('ecommerce-badge', EcommerceBadge)

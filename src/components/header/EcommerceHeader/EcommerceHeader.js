import { LitElement, html, css } from 'lit'
import { EcommerceButtonCart } from '../EcommerceButtonCart/EcommerceButtonCart.js'
import { EcommerceMobileMenu } from '../EcommerceMobileMenu/EcommerceMobileMenu.js'
import styles from './EcommerceHeader.css.js'

export class EcommerceHeader extends LitElement {
	static get styles() {
		return [styles]
	}

	render() {
		return html`
			<header class="ecommerce-header">
				<div class="ecommerce-header-left">
					<ecommerce-mobile-menu></ecommerce-mobile-menu>
					<img src="/logo.svg" alt="logo" class="ecommerce-header-logo" />
					<ul class="ecommerce-header-list">
						<li class="ecommerce-header-list__item">Collections</li>
						<li class="ecommerce-header-list__item">Men</li>
						<li class="ecommerce-header-list__item">Women</li>
						<li class="ecommerce-header-list__item">About</li>
						<li class="ecommerce-header-list__item">Contact</li>
					</ul>
				</div>
				<div class="ecommerce-header-right">
					<!-- <img src="/icon-cart.svg" alt="icon cart" class="ecommerce-header__cart" /> -->
					<ecommerce-button-cart></ecommerce-button-cart>
					<img src="/image-avatar.png" alt="avatar" class="ecommerce-header__avatar" />
				</div>
			</header>
		`
	}
}

customElements.define('ecommerce-header', EcommerceHeader)

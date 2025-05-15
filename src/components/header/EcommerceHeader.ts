import { LitElement, html, css } from 'lit'
import { EcommerceMobileMenu } from './EcommerceMobileMenu.ts'

export class EcommerceHeader extends LitElement {
	// @property({ type: Boolean })
	// _isMobileMenuOpen = false
	_isMobileMenuOpen = false

	static get properties() {
		return {
			_isMobileMenuOpen: { type: Boolean, attribute: 'is-mobile-menu-open' },
		}
	}

	constructor() {
		super()
		this._isMobileMenuOpen = false
	}

	static styles = css`
		.ecommerce-header {
			display: flex;
			justify-content: space-between;
			padding: 1rem 1.5rem;
			position: relative;
		}
		.ecommerce-header__menu {
			cursor: pointer;
			background: none;
			border: none;
		}
		.ecommerce-header-left {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem;
		}
		.ecommerce-header-right {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1.5rem;
		}
		.ecommerce-header__avatar {
			border-radius: 50%;
			width: 2rem;
			height: 2rem;
		}
	`

	_handleMenuClick() {
		this._isMobileMenuOpen = !this._isMobileMenuOpen
	}

	render() {
		return html`
			<header class="ecommerce-header">
				<div class="ecommerce-header-left">
					<button class="ecommerce-header__menu" @click=${this._handleMenuClick}>
						<img src="/icon-menu.svg" alt="icon" />
					</button>
					<img src="/logo.svg" alt="logo" class="ecommerce-header-logo" />
				</div>
				<ecommerce-mobile-menu ?is-open=${this._isMobileMenuOpen}></ecommerce-mobile-menu>
				<div class="ecommerce-header-right">
					<img src="/icon-cart.svg" alt="icon cart" />
					<img src="/image-avatar.png" alt="avatar" class="ecommerce-header__avatar" />
				</div>
			</header>
		`
	}
}

customElements.define('ecommerce-header', EcommerceHeader)

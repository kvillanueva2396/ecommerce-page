import { LitElement, html, css } from 'lit'
import { EcommerceMobileMenu } from './EcommerceMobileMenu.ts'

export class EcommerceHeader extends LitElement {
	_isMobileMenuOpen: boolean

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

	_handleMenuButtonClose(event: CustomEvent) {
		this._isMobileMenuOpen = event.detail.isOpen
	}

	render() {
		return html`
			<header class="ecommerce-header">
				<div class="ecommerce-header-left">
					<ecommerce-mobile-menu></ecommerce-mobile-menu>
					<img src="/logo.svg" alt="logo" class="ecommerce-header-logo" />
				</div>
				<div class="ecommerce-header-right">
					<img src="/icon-cart.svg" alt="icon cart" />
					<img src="/image-avatar.png" alt="avatar" class="ecommerce-header__avatar" />
				</div>
			</header>
		`
	}
}

customElements.define('ecommerce-header', EcommerceHeader)

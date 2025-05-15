import { LitElement, html, css } from 'lit'
import { classMap } from 'lit/directives/class-map.js'

export class EcommerceMobileMenu extends LitElement {
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
		:host {
			display: block;
			font-family: var(--font-family-primary);
			font-weight: 700;
		}
		@media (min-width: 768px) {
			:host {
				display: none;
			}
		}
		.ecommerce-mobile-menu {
			background: white;
			position: absolute;
			top: 0;
			left: 0;
			transition: transform 0.3s ease-in-out;
			transform: translateX(-100%);
			width: auto;
			height: 100vh;
			padding: 1rem 1.5rem;
		}
		.ecommerce-mobile-menu--open {
			transform: translateX(0);
		}
		.overlay {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-color: rgba(0, 0, 0, 0.5);
			opacity: 0;
			pointer-events: none;
			transition: opacity 0.3s ease-in-out;
		}

		.overlay--visible {
			opacity: 1;
			pointer-events: auto;
		}

		ul {
			list-style: none;
			padding: 0;
		}

		.menu-list {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			margin-top: 2rem;
		}

		button {
			background: none;
			border: none;
			cursor: pointer;
			padding: 0;
		}
	`

	get menuClasses() {
		return {
			'ecommerce-mobile-menu': true,
			'ecommerce-mobile-menu--open': this._isMobileMenuOpen,
		}
	}

	get overlayClasses() {
		return {
			overlay: true,
			'overlay--visible': this._isMobileMenuOpen,
		}
	}

	_handleButtonClose() {
		this._isMobileMenuOpen = false
	}

	_handleMenuClick() {
		this._isMobileMenuOpen = !this._isMobileMenuOpen
	}

	render() {
		return html`
			<button class="ecommerce-header__menu" @click=${this._handleMenuClick}>
				<img src="/icon-menu.svg" alt="icon" />
			</button>
			<div class=${classMap(this.overlayClasses)}></div>
			<div class=${classMap(this.menuClasses)}>
				<button @click=${this._handleButtonClose}>
					<img src="/icon-close.svg" alt="icon close" />
				</button>
				<ul class="menu-list">
					<li>Collections</li>
					<li>Men</li>
					<li>Women</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
		`
	}
}

customElements.define('ecommerce-mobile-menu', EcommerceMobileMenu)

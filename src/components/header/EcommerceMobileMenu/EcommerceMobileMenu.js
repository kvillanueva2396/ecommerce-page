import { LitElement, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import styles from './EcommerceMobileMenu.css.js'

export class EcommerceMobileMenu extends LitElement {
	static get properties() {
		return {
			_isMobileMenuOpen: { type: Boolean, attribute: 'is-mobile-menu-open' },
		}
	}

	constructor() {
		super()
		this._isMobileMenuOpen = false
	}

	static get styles() {
		return [styles]
	}

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

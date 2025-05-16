import { css } from 'lit'

const styles = css`
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

export default styles

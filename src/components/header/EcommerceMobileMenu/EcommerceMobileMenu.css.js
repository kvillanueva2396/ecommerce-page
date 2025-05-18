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
		z-index: 99;
	}
	.ecommerce-mobile-menu--open {
		transform: translateX(0);
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

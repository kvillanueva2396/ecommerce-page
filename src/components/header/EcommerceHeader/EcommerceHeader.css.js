import { css } from 'lit'

const styles = css`
	:host {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}
	.ecommerce-header {
		display: flex;
		justify-content: space-between;
		position: relative;
		width: auto;
		height: 120px;
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
		gap: 2.5rem;
	}
	.ecommerce-header__cart {
		width: 1.5rem;
		height: 1.5rem;
		cursor: pointer;
	}
	.ecommerce-header__avatar {
		border-radius: 50%;
		width: 3rem;
		height: 3rem;
		border: 2px solid transparent;
		cursor: pointer;
	}
	.ecommerce-header__avatar:hover {
		border: 2px solid var(--orange);
	}
	.ecommerce-header-list {
		list-style: none;
		display: flex;
		gap: 2rem;
		font-family: var(--font-family-primary);
		font-weight: 300;
		margin: 0;
		width: 100%;
		height: 100%;
	}
	.ecommerce-header-list__item {
		cursor: pointer;
		transition: color 0.3s ease-in-out;
		color: var(--grayish-blue);
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
	}
	.ecommerce-header-list__item:hover {
		color: var(--very-dark-blue);
		border-bottom: var(--separator-margin) solid var(--orange);
	}
	@media (max-width: 768px) {
		.ecommerce-header {
			height: 60px;
			padding: 1rem 1.5rem;
		}
		.ecommerce-header-list {
			display: none;
		}
		.ecommerce-header-right {
			gap: 1rem;
		}
		.ecommerce-header__avatar {
			width: 2rem;
			height: 2rem;
		}
	}
`

export default styles

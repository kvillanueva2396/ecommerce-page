import { css } from 'lit'

const styles = css`
	:host {
		button {
			background: none;
			border: none;
		}
	}

	.ecommerce-button-cart {
		cursor: pointer;
		position: relative;
	}
	.ecommerce-header-cart__icon {
		position: relative;
		width: 30px;
		height: 30px;
	}
	@media (max-width: 768px) {
		.ecommerce-header-cart__icon {
			width: 20px;
			height: 20px;
		}
	}
`

export default styles

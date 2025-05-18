import { css } from 'lit'

const styles = css`
	:host {
		font-family: var(--font-family-primary);

		*,
		::before,
		::after {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
		}
	}
	.ecommerce-basket {
		position: absolute;
		box-shadow: 0px 13px 39px -8px rgba(0, 0, 0, 0.75);
		-webkit-box-shadow: 0px 13px 39px -8px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 0px 13px 39px -8px rgba(0, 0, 0, 0.75);
		top: 100px;
		left: 12px;
		border-radius: 10px;
		width: 96%;
		z-index: 99999;
		background: var(--white);
		display: none;
	}
	.ecommerce-basket--open {
		display: block;
	}
	.ecommerce-basket__title {
		padding: 10px 20px;
		font-weight: 700;
	}
	.ecommerce-basket__body {
		padding: 20px 20px 30px 20px;
		display: flex;
		width: 100%;
		flex-direction: column;
	}
	.empty-text {
		color: var(--dark-grayish-blue);
		text-align: center;
		font-weight: 700;
	}
	.separator {
		margin: 0;
	}
	@media (min-width: 768px) {
		.ecommerce-basket {
			top: 110px;
			width: 350px;
			left: unset;
			right: 0;
		}
	}
`

export default styles

import { css } from 'lit'

const styles = css`
	:host {
		display: block;
		font-family: var(--font-family-primary);

		h2,
		h3 {
			margin: 0;
		}
	}

	.product-info__company {
		color: var(--dark-grayish-blue);
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 2px;
	}

	.product-info__title {
		font-size: 36px;
		font-weight: 700;
		margin-bottom: 30px;
	}

	.product-info__description {
		color: var(--dark-grayish-blue);
		font-size: 14px;
	}

	.prices-wrapper {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 20px;
	}

	.new-price-wrapper {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.new-price {
		font-weight: 700;
		font-size: 24px;
	}

	.discount {
		color: var(--white);
		background: #000;
		font-weight: 700;
		padding: 2px 10px;
		border-radius: 10px;
		font-size: 14px;
	}

	.price {
		text-decoration-line: line-through;
		color: var(--dark-grayish-blue);
		font-weight: 700;
	}

	.icon {
		filter: grayscale(100%) brightness(0%);
	}

	.product-info__buttons {
		display: flex;
		justify-content: space-between;
		gap: 20px;
		align-items: center;
	}

	.product-info__counter {
		flex-basis: 35%;
		display: flex;
	}

	.product-info__add-cart {
		flex-basis: 60%;
	}

	@media (max-width: 768px) {
		.product-info__title {
			font-size: 24px;
		}
		.prices-wrapper {
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 10px;
		}
		.product-info__buttons {
			flex-direction: column;
			width: 100%;
		}
		.product-info__counter {
			flex-basis: auto;
			width: 100%;
		}
		.product-info__add-cart {
			flex-basis: auto;
			width: 100%;
		}
	}
`

export default styles

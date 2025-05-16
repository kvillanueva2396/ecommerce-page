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
	.product-info {
		padding: 20px;
	}

	.product-info__company {
		color: var(--dark-grayish-blue);
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 2px;
	}

	.product-info__title {
		font-size: 24px;
		font-weight: 700;
	}

	.product-info__description {
		color: var(--dark-grayish-blue);
		font-size: 14px;
	}

	.prices-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
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
`

export default styles

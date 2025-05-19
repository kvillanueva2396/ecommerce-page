import { css } from 'lit'

const styles = css`
	.carousel {
		display: none;
	}
	.ecommerce-hero {
		display: flex;
		padding: 80px 45px;
	}
	.hero-images {
		display: flex;
		flex-direction: column;
	}
	.big-image-wrapper {
		cursor: pointer;
		margin-bottom: 20px;
	}
	.big-image {
		width: 400px;
		height: 400px;
		border-radius: 15px;
	}
	.ecommerce-hero__product-info {
		padding: 40px 0 40px 110px;
	}

	@media (max-width: 768px) {
		.carousel {
			display: block;
		}
		.ecommerce-hero {
			padding: 20px;
		}
		.hero-images {
			display: none;
		}
		.ecommerce-hero__product-info {
			padding: 0;
		}
	}
`

export default styles

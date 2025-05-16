import { css } from 'lit'

const styles = css`
	.ecommerce-page {
		max-width: 1200px;
		margin: 0 auto;
	}
	.separator {
		border: 0;
		height: 1px;
		background-color: var(--grayish-blue);
		margin: var(--separator-margin) 0;
	}

	@media (max-width: 768px) {
		.separator {
			display: none;
		}
	}
`

export default styles

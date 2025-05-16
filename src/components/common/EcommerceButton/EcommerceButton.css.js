import { css } from 'lit'

const styles = css`
	:host {
		*,
		::after,
		::before {
			box-sizing: border-box;
			padding: 0;
			margin: 0;
		}
	}
	.ecommerce-button {
		background: var(--orange);
		border: none;
		font-weight: 700;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		width: 100%;
		height: auto;
		padding: 14px 0;
		border-radius: 10px;
	}
`

export default styles

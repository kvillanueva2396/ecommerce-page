import { css } from 'lit'

const styles = css`
	:host {
		font-weight: 700;
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		background: var(--light-grayish-blue);
		padding: 10px 20px;
		border-radius: 10px;

		*,
		::after,
		::before {
			box-sizing: border-box;
			padding: 0;
			margin: 0;
		}

		button {
			cursor: pointer;
		}
	}
	.counter-button {
		border: none;
		background: none;
	}
`

export default styles

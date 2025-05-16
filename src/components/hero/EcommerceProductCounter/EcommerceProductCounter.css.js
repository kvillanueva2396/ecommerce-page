import { css } from 'lit'

const styles = css`
	:host {
		display: block;
		font-weight: 700;

		*,
		::after,
		::before {
			box-sizing: border-box;
			padding: 0;
			margin: 0;
		}
	}
	.counter {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		background: var(--light-grayish-blue);
		padding: 10px 20px;
		border-radius: 10px;
		margin-bottom: 10px;
	}
	.counter-button {
		border: none;
		background: none;
	}
`

export default styles

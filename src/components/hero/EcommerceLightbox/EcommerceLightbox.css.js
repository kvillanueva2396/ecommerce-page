import { css } from 'lit'

const styles = css`
	:host {
		*,
		::before,
		::after {
			box-sizing: border-box;
			padding: 0;
			margin: 0;
		}

		button {
			background: none;
			border: none;
			cursor: pointer;
		}
	}
	.lightbox {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
		justify-content: center;
		max-width: 450px;
		margin: 0 auto;
	}

	.lightbox__close-button {
		margin-bottom: 10px;
		align-self: end;
	}

	.lightbox__thumbnail-bar {
		margin-top: 20px;
		width: 100%;
		height: auto;
	}
`

export default styles

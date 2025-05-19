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
		height: auto;
		justify-content: center;
		max-width: 450px;
		margin: 0 auto;
	}
	/* .lightbox__carousel {
		width: 400px;
		height: 400px;
	} */

	.lightbox__thumbnail-bar {
		margin-top: 20px;
		width: 100%;
		height: auto;
	}
`

export default styles

import { css } from 'lit'

const styles = css`
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.3s ease-in-out;
		z-index: 99;
	}

	.overlay--visible {
		opacity: 1;
		pointer-events: auto;
	}
`
export default styles

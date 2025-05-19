import { css } from 'lit'

const styles = css`
	.thumbnail {
		display: inline-block;
		position: relative;
		cursor: pointer;
		width: 80px;
		height: 80px;
		border-radius: 15px;
	}

	.thumbnail::before {
		content: '';
		position: absolute;
		top: 2px;
		left: 2px;
		width: 100%;
		height: 100%;
		background-color: white;
		opacity: 0;
		border-radius: 15px;
		pointer-events: none;
	}

	.thumbnail:hover::before {
		opacity: 0.5;
	}
	.thumbnail--selected::before {
		opacity: 0.5;
	}

	.thumbnail__image {
		display: block;
		width: 100%;
		height: auto;
		border-radius: 15px;
		border: 2px solid transparent;
	}
	.thumbnail__image--selected {
		border-color: var(--orange);
	}
`

export default styles

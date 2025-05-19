import { css } from 'lit'

const styles = css`
	.thumbnail {
		cursor: pointer;
		position: relative;
		overflow: hidden;
		display: inline-block;
	}
	.thumbnail--selected {
		border-color: var(--orange);
	}
	.thumbnail::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: white;
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}
	.thumbnail:hover::before {
		opacity: 0.5;
	}
	.thumbnail__image {
		width: 80px;
		height: 80px;
		border-radius: 15px;
		border: 2px solid transparent;
		opacity: 1;
	}
	.thumbnail__image--selected {
		border-color: var(--orange);
		opacity: 0.5;
	}
`

export default styles

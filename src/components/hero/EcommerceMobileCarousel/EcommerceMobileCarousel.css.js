import { css } from 'lit'

const styles = css`
	:host {
		display: block;
		position: relative;
		overflow: hidden;
	}

	@media (min-width: 768px) {
		:host {
			display: none;
		}
	}

	.carousel-wrapper {
		display: flex;
		transition: transform 0.5s ease-in-out;
	}

	.carousel-image {
		width: 100%;
		flex-shrink: 0;
	}

	.nav-button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: none;
		border: none;
		cursor: pointer;
		background: var(--white);
		border-radius: 100%;
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav-button--prev {
		left: 10px;
	}

	.nav-button--next {
		right: 10px;
	}
`

export default styles

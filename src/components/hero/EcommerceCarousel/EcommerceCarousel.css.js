import { css } from 'lit'

const styles = css`
	:host {
		display: block;
		position: relative;
		overflow: hidden;
	}

	.carousel-wrapper {
		display: flex;
		transition: transform 0.5s ease-in-out;
	}

	.carousel-image {
		width: 100%;
		flex-shrink: 0;
		border-radius: 15px;
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

	@media (max-width: 768px) {
		.carousel-image {
			border-radius: 0;
		}
	}
`

export default styles

import { css } from 'lit'

const styles = css`
	:host {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		ul {
			list-style: none;
			margin: 0;
			padding: 0;
		}
	}
	.thumbnail-bar-wrapper {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.thumbnail {
		width: 80px;
		height: 80px;
		border-radius: 15px;
	}
`

export default styles

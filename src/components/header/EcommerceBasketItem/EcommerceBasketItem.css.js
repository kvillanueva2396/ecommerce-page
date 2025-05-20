import { css } from 'lit'

const styles = css`
	:host {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		p {
			margin: 0;
		}
	}
	.basket-item-data-wrapper {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	.basket-item__thumbnail {
		width: 50px;
		height: 50px;
		object-fit: contain;
		border-radius: 10px;
	}
	.basket-item__data {
		padding: 6px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		color: var(--grayish-blue);
	}
	.delete-button {
		border: none;
		background: none;
		padding: 0;
		cursor: pointer;
	}
	.total-price {
		color: #000;
		font-weight: 700;
	}
`

export default styles

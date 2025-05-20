import { LitElement, html, css } from 'lit'

export class IconClose extends LitElement {
	static styles = css`
		:host {
			display: inline-block;
			cursor: pointer;
			color: var(--icon-color, #69707d);
			transition: color 0.3s;
		}

		:host(:hover) {
			color: var(--icon-hover-color, red);
		}

		svg {
			display: block;
		}
	`

	render() {
		return html`
			<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15">
				<path
					d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
					fill="currentColor"
					fill-rule="evenodd"
				/>
			</svg>
		`
	}
}

customElements.define('icon-close', IconClose)

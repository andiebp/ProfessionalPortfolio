import React from "react";
import "./style.css";

export default class extends React.Component {
	render() {
		return (<nav className="right-align">
			<ul>
				{
					React.Children.map(this.props.children, child => {
						return (<li>{child}</li>);
					})
				}
			</ul>
		</nav>);
	}
};

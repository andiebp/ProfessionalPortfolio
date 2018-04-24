import React from "react";
import "./style.css";

export default class extends React.Component {
	constructor(props) {
	   super(props);
	   this.state = {}
	}
	componentDidMount() {
		M.Collapsible.init(this.refs.collapsible, {accordion: !this.props.expandable});
	}
	render() {
		return (<ul ref="collapsible" className="collapsible" data-collapsible="accordion">
			{
				React.Children.map(this.props.children, child => (<li className={child.props.className}>
					<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">
						{child.props.title}
					</div>
					<div className="collapsible-body">
						{child.props.children}
					</div>
				</li>))
			}
		</ul>);
	};
};

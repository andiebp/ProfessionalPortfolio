import React from "react";
import {Link as InternalLink} from "react-router-dom";

export default class extends React.Component {
	isInternal(to) {
		// If it's a relative url such as '/path', 'path' and does not contain a protocol we can assume it is internal.
		return (to.indexOf("://") === -1);
		return true;
		let anchor = document.createElement('a');
		anchor.href = to;
		return window.location.hostname === anchor.hostname;
	}
	render() {
		let {to, children, className} = this.props;
		let isInternal = this.isInternal(to);
		if (className) {
			const classes = className.split(" ");
			if (classes.includes("external")) {
				classes.splice(classes.indexOf("external"));
				className = classes.join(' ');
				isInternal = false;
			}
		}
		if (isInternal) {
			return (<InternalLink to={to} className={className}>{children}</InternalLink>);
		} else {
			return (<a href={to} className={className} target="_blank">{children}</a>);
		}
	}
};

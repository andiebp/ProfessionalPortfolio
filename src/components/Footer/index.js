import React from "react";
import "./style.css";

export default(props) => (<footer className="page-footer teal lighten-2">
	<div className="footer-copyright">
		<div className="container center">
			{props.children}
		</div>
	</div>
</footer>);

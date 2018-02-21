import React from "react";
import {NavLink} from "react-router-dom";
import "./Nav.css";

const Nav = () => (<nav className="right-align">
	<ul>
		<li>
			<NavLink to="/">
				Home
			</NavLink>
		</li>
		<li>
			<NavLink to="/projects">
				Projects
			</NavLink>
		</li>
		<li>
			<NavLink to="/blog">
				Blog
			</NavLink>
		</li>
		<li>
			<NavLink to="/social">
				Social
			</NavLink>
		</li>
	</ul>
</nav>);

export default Nav;

import React from "react";
import "./style.css";

export default() => (<header>
	<div className="container">
		<a href="#" data-activates="nav-mobile" className="button-collapse">
			<i className="fa fa-bars fa-3x fixed-navicon"></i>
		</a>
		<ul id="nav-mobile" className="side-nav fixed side-bar blue-text">
			<li className="logo">
				<a id="logo-container" href="http://andiebourgeois.com/" className="brand-logo white-text">
					{/* <img height="100" src="images/andie.jpg"> */}
					<object id="front-page-logo" type="image/jpg" width="50" data="images/batman.svg">Placeholder photo</object>
					<h4>Andie Bourgeois</h4>
					<h6>UI / Web Developer</h6>
				</a>

			</li>
			<br/>
			<br/>

			<li className="side-link">
				<a className="blue-text" href="#" link="#introduction">About Me&nbsp;&nbsp;<i link="#projects" className="fa fa-user"></i>
				</a>
			</li>
			<li className="side-link">
				<a className="blue-text" href="#" link="#projects">Projects&nbsp;&nbsp;<i link="#projects" className="fa fa-file-text"></i>
				</a>
			</li>
			<li className="side-link">
				<a className="blue-text" href="#" link="#blog">Blog&nbsp;&nbsp;<i link="#blog" className="fa fa-book"></i>
				</a>
			</li>
			<li className="side-link">
				<a className="blue-text" href="#" link="#resume">Resume&nbsp;&nbsp;<i link="#resume" className="fa fa-th"></i>
				</a>
			</li>
			<li className="side-link">
				<a className="blue-text" href="#" link="#contact">Contact&nbsp;&nbsp;<i link="#contact" className="fa fa-envelope"></i>
				</a>
			</li>

			<li className="side-link-footer center">
				&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="#">
					<i className="fa fa-facebook fa-lg"></i>
				</a>&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="https://github.com/andiebp/professionalportfolio">
					<i className="fa fa-github fa-lg"></i>
				</a>&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="#">
					<i className="fa fa-twitter fa-lg"></i>
				</a>&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="#">
					<i className="fa fa-skype fa-lg"></i>
				</a>&nbsp;&nbsp;&nbsp;&nbsp;
			</li>
		</ul>
	</div>
</header>);

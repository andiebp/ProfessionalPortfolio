import React from "react";

const Page = () => (<div>
	<div id="about" className="sub-section">
		<h4 className="header center-on-small-only">About Me</h4>
		<p>Bonjour!! Im Andie, A full-stack developer in Frisco, TX. I have a passion for clean cut and crisp UIs. To that effect, I love to work with Materialize, as I feel like it allows for an organic experience (UX) and a very intuitive, refined interface (UI).
			<br/>
			<br/>
			Skills : JavaScript | HTML5 | CSS3 | ReactJS | jQuery | Node.JS | MySQL
		</p>
	</div>
	<div id="role" className="sub-section">
		<p>Current Role :</p>
		<ul className="collapsible" data-collapsible="accordion">
			<li>
				<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">UI / Web Developer @ Organization</div>
				<div className="collapsible-body">
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
			</li>
		</ul>
		<div className="float-left">
			<ul className="collapsible" data-collapsible="accordion">
				<li>
					<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Role 3</div>
					<div className="collapsible-body">
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</li>
				<li>
					<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Role 2</div>
					<div className="collapsible-body">
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</li>
				<li>
					<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Role 1</div>
					<div className="collapsible-body">
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</li>
			</ul>
		</div>

		<div className="float-right">
			<ul className="collapsible" data-collapsible="accordion">
				<li>
					<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Education 3</div>
					<div className="collapsible-body">
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</li>
				<li>
					<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Education 2</div>
					<div className="collapsible-body">
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</li>
				<li>
					<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Education 1</div>
					<div className="collapsible-body">
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</li>
			</ul>
		</div>
		<a id="download-cv" className="waves-effect waves-light btn-large">Download CV</a>
	</div>
</div>);

export default Page;

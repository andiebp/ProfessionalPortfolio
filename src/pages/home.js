import Accordion from "../components/Accordion"
import Link from "../components/Link";
import React from "react";

export default() => (<React.Fragment>
	<div className="container center">
		<div className="row">
			<div className="col s12 light center header">
				<h4 className="header center-on-small-only">About Me</h4>
				<p>
					Bonjour!! I'm Andie, A full-stack developer in Frisco, TX. I have a passion for clean cut and crisp UIs. To that effect, I love to work with Materialize, as I feel like it allows for an organic experience (UX) and a very intuitive, refined interface (UI).
				</p>
				<p>
					Skills : JavaScript | HTML5 | CSS3 | ReactJS | jQuery | Node.JS | MySQL
				</p>
			</div>
		</div>
		<div className="row">
			<Accordion>
				<li title="Full-Stack Web Developer - Currently seeking" className="active">
					<p>
						Currently seeking a Full Stack Web developer position, open to freelance projects opportunities
					</p>
				</li>
			</Accordion>

			<div className="float-right">
				<Accordion expandable="true">
					<li title="Southern Methodist University - Jan. 2018" className="active">
						<h4>
							Full Stack Web Development Certificate Coding Bootcamp
						</h4>
						<p>
							Skills learned: Full stack web application development, project management, team management, version control merges/conflicts solving, debugging, code refactoring, pair programming, web application research and design
						</p>
					</li>
					<li title="Collin College - 2019" className="active">
						<h4>AA Applied Science Business Field of Study</h4>
						<p>Related Coursework: Change Management, Organizational Behavior, Negotiations and Conflict Management, Principles of Marketing, Business Ethics</p>
					</li>
				</Accordion>
			</div>
			<Link to="assets/Bourgeois, Andie - Resume.pdf" className="waves-effect waves-light btn-large external">Download Resume</Link>
		</div>
	</div>
</React.Fragment>)
import Accordion from "../components/Accordion"
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
				<li title="UI / Web Developer @ Organization">
					<p>Lorem ipsum dolor sit amet.</p>
				</li>
			</Accordion>

			<div className="float-right">
				<Accordion>
					<li title="SOUTHERN METHODIST UNIVERSITY - JAN. 2018">
						<h4>
							Full Stack Web Development Certificate Coding Bootcamp
						</h4>
						<p>
							Skills learned: project management, team management, version control merges/conflicts solving, debugging, code refactoring, pair programming, web application research and design
						</p>
					</li>
					<li title="COLLIN COLLEGE - 2019">
						<h4>AA Applied Science Business Field of Study</h4>
						<p>Related Coursework: Change Management, Organizational Behavior, Negotiations and Conflict Management, Principles of Marketing, Business Ethics</p>
					</li>
				</Accordion>
			</div>
			<a href="/assets/Bourgeois, Andie - Resume.pdf" className="waves-effect waves-light btn-large">Download Resume</a>
		</div>
	</div>
</React.Fragment>)

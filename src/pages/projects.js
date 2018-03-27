import React from "react";
import {Route} from "react-router-dom";

class Page extends React.Component {
	componentDidMount() {
		let elem = document.querySelector('.collapsible');
		M.Collapsible.init(elem);
	}
	render() {
		return (<div>
			<div id="projects" className="section scrollspy">
				<div className="container center">
					<div className="row">
						<div className="col s12 light center header">
							<h4 className="header center-on-small-only">My Projects</h4>
							<ul className="collapsible" data-collapsible="accordion">
								<li>
									<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Truax Trumpets
									</div>
									<div className="collapsible-body">
										<div>
											Placeholder for screenshot of project with&nbsp;
											<a href="https://truax-trumpets.herokuapp.com/" target="_blank">
												link
											</a>.
										</div>
										<p>Placeholder for description of project</p>
									</div>
								</li>
								<li>
									<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Project 3</div>
									<div className="collapsible-body">
										<p>Lorem ipsum dolor sit amet.</p>
									</div>
								</li>
								<li>
									<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Project 2</div>
									<div className="collapsible-body">
										<p>Lorem ipsum dolor sit amet.</p>
									</div>
								</li>
								<li>
									<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Project 1</div>
									<div className="collapsible-body">
										<p>Lorem ipsum dolor sit amet.</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>);
	}
};

export default Page;

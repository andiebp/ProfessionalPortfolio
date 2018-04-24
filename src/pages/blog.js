import React from "react";
import {Route} from "react-router-dom";

export default class extends React.Component {
	componentDidMount() {
		let elem = document.querySelector('.collapsible');
		M.Collapsible.init(elem);
	}
	render() {
		return (<div>
			<div id="publications" className="section scrollspy">
				<div className="container center">
					<div className="row">
						<div className="col s12 light center header">
							<h4 className="header center-on-small-only">Thoughts Tornado</h4>
							<ul className="collapsible" data-collapsible="accordion">
								<li>
									<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Blog Post #1</div>
									<div className="collapsible-body">
										<p>Lorem ipsum dolor sit amet.</p>
									</div>
								</li>
								<li>
									<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Blog Post #2</div>
									<div className="collapsible-body">
										<p>Lorem ipsum dolor sit amet.</p>
									</div>
								</li>
							</ul>
						</div>

					</div>
					<div className="col s2 pull-s2"></div>
				</div>
			</div>
		</div>);
	}
};

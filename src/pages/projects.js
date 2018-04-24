import React from "react";
import {Route} from "react-router-dom";
import Accordion from "../components/Accordion"

export default class extends React.Component {
	render() {
		return (<div className="container center">
			<div className="row">
				<div className="col s12 light center header">
					<h4 className="header center-on-small-only">My Projects</h4>
					<Accordion>
						<li title="Truax Trumpets">
							<a href="https://truax-trumpets.herokuapp.com/" target="_blank">
								<img src="/assets/truax_trumpets.png" className="screenshot"/>
							</a>
						</li>
					</Accordion>
				</div>
			</div>
		</div>);
	}
};

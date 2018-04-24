import React from "react";
import {Route} from "react-router-dom";
import Accordion from "../components/Accordion"
import Link from "../components/Link";

export default class extends React.Component {
	render() {
		return (<div className="container center">
			<div className="row">
				<div className="col s12 light center header">
					<h4 className="header center-on-small-only">My Projects</h4>
					<Accordion>
						<li title="Truax Trumpets">
							<Link to="https://truax-trumpets.herokuapp.com/">
								<img src="/assets/truax_trumpets.png" className="screenshot"/>
							</Link>
							<p>
								Truax Trumpets was my final project, during the Coding Bootcamp. For the occasion, my teammate and I were able to find a real customer. TruaxTrumpets is a non-profit organization, providing music camps for children, with the mission to popularize Jazz music to the youth. When comparing to other projects we had worked on, TruaxTrumpets was challenging on a multitude of levels; first and foremost, we never had encountered a situation where requirements could change overnight. Thankfully, it wasn't changes that we weren't equipped to handle.
							</p>
							My Role: For this project, we decided to work in pair programming. The tasks assigned to me were mainly the Material-UI and the Camp Registration Form (JSX and DB)
							<br/>
							Technologies used: ReactJS-JSX, MongoDB, Mongoose, Materialize.<br/>

							<Link to="https://www.github.com/andiebp/TruaxCamp/">
								TruaxTrumpets GitHub Repo
							</Link>
						</li>
					</Accordion>
					<Accordion>
						<li title="WallaBam">
							<Link to="https://andiebp.github.io/WallaBam/">
								<img src="/assets/running_bamazon.gif" className="screenshot"/>
							</Link>
							My Role: This application was solely developed by me.
							<br/>
							Technologies used: Node.js, MySQL, JavaScript.
							<br/>
							<Link to="https://www.github.com/andiebp/WallaBam/">
								Wallabam GitHub Repo
							</Link>
						</li>
					</Accordion>
					<Accordion>
						<li title="Andie's Portfolio">
							<Link to="/">
								<img src="/assets/portfolio.png" className="screenshot"/>
							</Link>
							<p>
								I decided to build this portfolio using React.JS in combination with a few extra frameworks. I wanted to push myself and use this as yet another challenge overcome.
							</p>
							My Role: This application was solely developed by me.
							<br/>
							Technologies used: React.js, Webpack 4, Materialize.
							<br/>
							<Link to="https://www.github.com/andiebp/professionalportfolio/">
								This Portfolio's GitHub Repo
							</Link>
						</li>
					</Accordion>
				</div>
			</div>
		</div>);
	}
};

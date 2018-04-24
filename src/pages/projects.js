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
							Truax Trumpets was my final project, during the Coding Bootcamp. For the occasion, my teammate and I were able to find a real customer.
							TruaxTrumpets is a non-profit organization, providing music camps for children, with the mission to popularize Jazz music to the youth.
							When comparing to other projects we had worked on, TruaxTrumpets was challenging on a multitude of levels; first and foremost, we never had
							encountered a situation where requirements could change overnight. Thanfully, it wasn't changes that we weren't equipped to handle.
							<br />
							My Role: For this project, we decided to work in pair programming. The tasks assigned to me were mainly the Material-UI and the Camp Registration Form (JSX and DB)
							<br />
							Technologies used: ReactJS-JSX, MongoDB, Mongoose, Materialize.<br />

							<a href="https://www.github.com/andiebp/TruaxCamp/" target="_blank">
								Find the TruaxTrumpets GitHub Repository here
							</a>
						</li>
					</Accordion>
					<Accordion>
						<li title="WallaBam">
							<a href="https://andiebp.github.io/WallaBam/" target="_blank">
								<img src="/assets/running_bamazon.gif" className="screenshot"/>
							</a>

							My Role: This application was solely developed by me.
							<br />
							Technologies used: Node.js, MySQL, JavaScript.
							<br />
							<a href="https://www.github.com/andiebp/WallaBam/" target="_blank">
								Find Wallabam GitHub Repository here
							</a>
						</li>
					</Accordion>
					<Accordion>
						<li title="Andie's Portfolio">
							<a href="https://www.andiebourgeois.com" target="_blank">
								<img src="/assets/andie_portfolio.png" className="screenshot"/>
							</a>
							I decided to build this portfolio using React.JS in combination with a few extra frameworks. I wanted to push myself and use this as yet another challenge overcome.
							<br />
							My Role: This application was solely developed by me.
							<br />
							Technologies used: React.js, Webpack3, Materialize, etc.
							<br />
							<a href="https://www.github.com/andiebp/professionalportfolio/" target="_blank">
								Find this Portfolio's GitHub Repository here
							</a>
						</li>
					</Accordion>
				</div>
			</div>
		</div>);
	}
};

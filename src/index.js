import React from 'react';
import {render} from 'react-dom';
import {Route, NavLink, BrowserRouter} from "react-router-dom";
import Nav from "./components/Nav";
import * as Page from "./pages"
import "./style.css";

const title = '';
class App extends React.Component {
	componentDidMount() {
		document.title = "Andie Bourgeois | Full-Stack Development, Frisco, Texas";
	}
	render() {
		return (<BrowserRouter>
			<div>
				{title}
				<Nav>
					<NavLink to="/">
						Home
					</NavLink>
					<NavLink to="/projects">
						Projects
					</NavLink>
					{
						/*
						<NavLink to="/blog">
							Blog
						</NavLink>
						<NavLink to="/social">
							Social
						</NavLink>
						*/
					}
				</Nav>
				<section id="content">
					<Route path="/" exact={true} component={Page.Home}/>
					<Route path="/blog" component={Page.Blog}/>
					<Route path="/social" component={Page.Social}/>
					<Route path="/projects" component={Page.Projects}/>
				</section>
			</div>
		</BrowserRouter>);
	}
};
render(<App/>, document.getElementById("app"));

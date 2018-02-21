import React from 'react';
import {render} from 'react-dom';
import {Route, NavLink, BrowserRouter} from "react-router-dom";
import Nav from "./components/Nav";
import * as Page from "./pages"

const title = '';
const App = () => {
	return (<BrowserRouter>
		<div>
			{title}
			<Nav/>
			<section id="content">
				<Route path="/" exact={true} component={Page.Home}/>
				<Route path="/blog" component={Page.Blog}/>
				<Route path="/social" component={Page.Social}/>
				<Route path="/projects" component={Page.Projects}/>
			</section>
		</div>
	</BrowserRouter>);
};
render(<App/>, document.getElementById("app"));

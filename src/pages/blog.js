import React from "react";

const Page = () => (<div>
	<div id="publications" className="section scrollspy">
		<div className="container center">
			<div className="row">
				<div className="col s12 light center header">
					<h4 className="header center-on-small-only">Publications</h4>

					<div id="workshops" className="sub-section">
						<p>Workshops :</p>
						<ul className="collapsible" data-collapsible="accordion">
							<li>
								<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Workshop 2</div>
								<div className="collapsible-body">
									<p>Lorem ipsum dolor sit amet.</p>
								</div>
							</li>
							<li>
								<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Workshop 1</div>
								<div className="collapsible-body">
									<p>Lorem ipsum dolor sit amet.</p>
								</div>
							</li>
						</ul>
					</div>

					<div id="journels" className="sub-section">
						<p>Journals :</p>
						<ul className="collapsible" data-collapsible="accordion">
							<li>
								<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Journal 2</div>
								<div className="collapsible-body">
									<p>Lorem ipsum dolor sit amet.</p>
								</div>
							</li>
							<li>
								<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Journal 1</div>
								<div className="collapsible-body">
									<p>Lorem ipsum dolor sit amet.</p>
								</div>
							</li>
						</ul>
					</div>

					<div id="conferences" className="sub-section">
						<p>Conferences :</p>
						<ul className="collapsible" data-collapsible="accordion">
							<li>
								<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Conference 2</div>
								<div className="collapsible-body">
									<p>Lorem ipsum dolor sit amet.</p>
								</div>
							</li>
							<li>
								<div className="collapsible-header waves-effect waves-light teal lighten-2 white-text">Conference 1</div>
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
	</div>
</div>);

export default Page;

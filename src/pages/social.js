import React from "react";

const Page = () => (<div>
	<div id="contact" className="section scrollspy">
		<div className="container center">
			<div className="row">
				<div className="col s12 light center header">
					<h4 className="header center-on-small-only">Contact Me</h4>
					<form id="contact-form" className="col s12 left" action="contact.php" method="post">
						<div className="row">
							<div className="input-field col s6">
								<input id="contact_name" name="name" type="text" className="validate black-text"/>
								<label for="contact_name" className="black-text">
									<i className="fa fa-user"></i>&nbsp;&nbsp;Full Name</label>
							</div>
							<div className="input-field col s6">
								<input id="contact_email" name="email" type="email" className="validate black-text"/>
								<label for="contact_email" className="black-text">
									<i className="fa fa-envelope"></i>&nbsp;&nbsp;Email-id</label>
							</div>
							<div className="input-field col s12">
								<textarea id="contact_message" name="message" className="materialize-textarea black-text"></textarea>
								<label for="contact_message" className="black-text">
									<i className="fa fa-pencil"></i>&nbsp;&nbsp;Message</label>
							</div>
							<div className="center">
								<button id="contact_form_submit" className="btn waves-effect waves-light teal lighten-2" type="submit">Submit&nbsp;&nbsp;<i className="fa fa-send"></i>&nbsp;&nbsp;
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className="col s2 pull-s2"></div>
			</div>
		</div>
	</div>
</div>);

export default Page;

import React, { Component } from 'react';

class SignIn extends Component {
	render() {
		return (
			<div class="container">
                <h5>Введите Email и пароль</h5>
				<form class="col s12">
					<div class="row">
						<div class="input-field col s12">
							<input id="email" type="email" class="validate" />
							<label for="email">Email</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col s12">
							<input id="password" type="password" class="validate" />
							<label for="password">Password</label>
						</div>
					</div>
                    <input type='submit' class="waves-effect waves-light btn" value='Вход'/>
				</form>
			</div>
		);
	}
}

export default SignIn;

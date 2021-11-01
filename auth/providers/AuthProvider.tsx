import * as React from "react";
import AuthService from "../services/AuthService";

const AuthContext = React.createContext({
	signinRedirectCallback: () => ({}),
	logout: () => ({}),
	signoutRedirectCallback: () => ({}),
	isAuthenticated: () => ({}),
	signinRedirect: () => ({}),
	signinSilentCallback: () => ({}),
	createSigninRequest: () => ({})
});

AuthContext.displayName = "AuthContext";

export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
	authService;

	constructor(props: {children: React.ReactNode}) {
		super(props);
		this.authService = new AuthService();
	}

	render() {
		return <AuthContext.Provider value={this.authService}>{this.props.children}</AuthContext.Provider>;
	}
}

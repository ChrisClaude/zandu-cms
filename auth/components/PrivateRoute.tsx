import * as React from 'react';
import { AuthConsumer } from '@/auth/providers/AuthProvider';

type PrivateRouteProps = {
	Component: React.ComponentType
};

const PrivateRoute = ({ Component }: PrivateRouteProps) => (
	<AuthConsumer>
		{({ isAuthenticated, signinRedirect }) => {
			let value;
			if (!!Component && isAuthenticated()) {
				value = <Component />;
			} else {
				signinRedirect();
				value = <span>loading</span>;
			}
			return value;
		}}
	</AuthConsumer>
);

export default PrivateRoute;

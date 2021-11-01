import * as React from 'react';
import Layout from '@/components/Layout';
import PrivateRoute from '@/auth/components/PrivateRoute';
import Meta from '@/components/Meta';

const Profile = () => (
	<PrivateRoute Component={() => <Layout>
		<Meta title="Zandu CMS - Profile" />
		<p>Profile</p>
	</Layout>} />
);

export default Profile;

import * as React from 'react';
import Layout from '@/components/Layout';
import PrivateRoute from '@/auth/components/PrivateRoute';
import Meta from '@/components/Meta';
import { Button } from '@mui/material';
import { AuthContext } from '@/auth/providers/AuthProvider';

const Profile = () => {
	const {getUser} = React.useContext(AuthContext);
	const handleCallAPI = async () => {
		const user = await getUser();
		fetch(`${process.env.NEXT_PUBLIC_ZANDU_CORE_ROOT_URL}/identity`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${user.access_token}`
			},
		}).then(res => res.json())
			.then(data => console.log(data));
	};

	return (
		<PrivateRoute Component={() => <Layout>
			<Meta title='Zandu CMS - Profile' />
			<div>
				<p>Profile</p>
				<Button variant='contained' onClick={handleCallAPI}>Call API</Button>
			</div>
		</Layout>} />
	);
}

export default Profile;

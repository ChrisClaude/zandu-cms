import * as React from 'react';
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import PrivateRoute from '@/auth/components/PrivateRoute';
import Meta from '@/components/Meta';
import { Button } from '@mui/material';
import { AuthContext } from '@/auth/providers/AuthProvider';
import NavBar from '@/components/NavBar';
import ProfileMenuItem from '@/components/ProfileMenuItem';

const Profile = () => {
	const {getUser, parseJwt} = React.useContext(AuthContext);
	const [user, setUser] = React.useState({});

	useEffect(() => {
		async function getCurrentUser() {
			setUser(await getUser());
		}

		getCurrentUser();
	}, []);

	const handleCallAPI = async () => {
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
			<NavBar>
				<ProfileMenuItem />
			</NavBar>
			<div className="px-8 py-10">
				<p>Profile</p>
				<div className="overflow-auto w-full">
					  Name: <span>{parseJwt(user.id_token).name}</span>
				</div>
				<Button variant='contained' onClick={handleCallAPI}>Call API</Button>
			</div>
		</Layout>} />
	);
}

export default Profile;

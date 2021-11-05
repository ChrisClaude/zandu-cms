import * as React from 'react';
import Layout from '@/components/Layout';
import Meta from '@/components/Meta';
import ProfileMenuItem from '@/components/ProfileMenuItem';
import NavBar from '@/components/NavBar';


export default function Home() {
	return (
		<Layout>
			<Meta title='Zandu CMS - Home' />
			<NavBar>
				<ProfileMenuItem />
			</NavBar>
		</Layout>
	);
}

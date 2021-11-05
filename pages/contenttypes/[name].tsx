import * as React from 'react';
import { useRouter } from 'next/router';
import Meta from '@/components/Meta';
import NavBar from '@/components/NavBar';
import ProfileMenuItem from '@/components/ProfileMenuItem';
import Layout from '@/components/Layout';

const ContentTypes = () => {
	const router = useRouter();
	const { name } = router.query;

	return (<Layout>
			<Meta title='Zandu CMS - Content Types' />
			<NavBar>
				<ProfileMenuItem />
			</NavBar>
			<div className='px-4 py-6'>
				<div>
					<div>
						<h2>{name}</h2>
						<div>0 entries found</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ContentTypes;

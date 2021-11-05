import * as React from 'react';
import { useRouter } from 'next/router';
import AddIcon from '@mui/icons-material/Add';
import Meta from '@/components/Meta';
import NavBar from '@/components/NavBar';
import ProfileMenuItem from '@/components/ProfileMenuItem';
import Layout from '@/components/Layout';
import { capitalizeFirstLetter } from '@/helpers/index';
import Button from '@mui/material/Button';

const ContentTypes = () => {
	const router = useRouter();
	const { name } = router.query;

	return (<Layout>
			<Meta title='Zandu CMS - Content Types' />
			<NavBar>
				<ProfileMenuItem />
			</NavBar>
			<div className='px-4 py-6'>
				<div className="flex items-center">
					<div>
						<h2>{name && capitalizeFirstLetter(name.toString())}</h2>
						<p className="text-sm text-gray-500">0 entries found</p>
					</div>
					<div className='ml-auto'>
						<Button variant="contained" startIcon={<AddIcon />}>
							Add New {name}
						</Button>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ContentTypes;

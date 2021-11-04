import * as React from 'react';
import Layout from '@/components/Layout';
import Meta from '@/components/Meta';
import ProfileMenuItem from '@/components/ProfileMenuItem';


export default function Home() {
	return (
		<Layout>
			<Meta title='Zandu CMS - Home' />
			<div className='bg-gray-50 shadow-paper'>
				<nav className='h-16 flex w-full'>
					<span className='flex items-center py-2 px-4 ml-auto hover:bg-gray-100 cursor-pointer'>
						<ProfileMenuItem />
					</span>
				</nav>
			</div>
		</Layout>
	);
}

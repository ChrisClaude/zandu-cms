import { Avatar } from '@mui/material';
import Layout from '@/components/Layout';
import Meta from '@/components/Meta';

// const Item = styled(Paper)(({ theme }) => ({
// 	...theme.typography.body2,
// 	borderRadius:  0
// }));

export default function Home() {
	return (
		<Layout>
			<Meta title='Zandu CMS - Home' />
			<div className='bg-gray-50 shadow-paper'>
				<nav className='h-16 flex w-full'>
					<span className='flex items-center py-2 px-4 ml-auto hover:bg-gray-100 cursor-pointer'>
						<Avatar className='bg-blue-400'>CD</Avatar>
					</span>
				</nav>
			</div>
		</Layout>
	);
}

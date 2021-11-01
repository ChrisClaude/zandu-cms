import Link from 'next/link';

const Header = () => {
	return (
		<header>
			<Link href="/profile">
				<a className="text-blue-500 cursor-pointer hover:underline">
				Profile
				</a>
			</Link>
		</header>
	);
};

export default Header;

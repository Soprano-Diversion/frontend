import { Outlet } from 'react-router-dom';

const PageLayout = () => {
	return (
		<>
			<header className='flex justify-between items-center py-4 px-6'>
				<span className='font-semibold text-xl tracking-tight'>Sketch to UI</span>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default PageLayout;

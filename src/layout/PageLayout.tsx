import { Outlet } from 'react-router-dom';

const PageLayout = () => {
	return (
		<>
			<header className='container flex justify-between items-center py-4'>
				<span className='font-semibold text-xl tracking-tight'>Sketch to UI</span>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default PageLayout;

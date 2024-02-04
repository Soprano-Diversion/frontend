import { Outlet } from 'react-router-dom';

const PageLayout = () => {
	return (
		<>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default PageLayout;

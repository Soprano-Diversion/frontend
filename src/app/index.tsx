import { Suspense } from 'react';
import { Toaster } from 'react-stacked-toast';
import { Layout, PageLoader } from '@/layout';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Pages from '@/pages';

export default function App() {
	return (
		<>
			<Toaster
				position='center'
				toastOptions={{
					duration: 3000,
					style: {
						background: '#363636',
						color: '#fff',
					},
				}}
			/>
			<Suspense fallback={<PageLoader />}>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Pages.Home />} />
						<Route path='editor' element={<Pages.Editor />} />
					</Route>
				</Routes>
			</Suspense>
		</>
	);
}

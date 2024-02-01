import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from '@/app';
import './styles/index.css';
import { Provider } from 'react-redux';
import store from '@/store/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

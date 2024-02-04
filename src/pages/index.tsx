import { lazy } from 'react';

export default {
	Home: lazy(() => import('./home')),
	Editor: lazy(() => import('./editor')),
	About: lazy(() => import('./about')),
};

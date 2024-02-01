import React from 'react';

import SplitPane from '../SplitPane';
import { MonacoWrapper } from './MonacoWrapper';

export interface EditorProps {}

export const Editor: React.FunctionComponent<EditorProps> = () => {
	return (
		<div className='flex flex-1 overflow-hidden'>
			<SplitPane split='horizontal' minSize={29} maxSize={-36} defaultSize={300}>
				<div className='flex flex-1 flex-col h-full overflow-hidden'>
					<MonacoWrapper />
				</div>
			</SplitPane>
		</div>
	);
};

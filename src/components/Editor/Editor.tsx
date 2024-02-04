import React, { useEffect } from 'react';

import SplitPane from '../SplitPane';
import { MonacoWrapper } from './MonacoWrapper';
import { useParams } from 'react-router-dom';
import { useGenerationSuspenseQuery } from '@/graphql/graphql-types';
import { useDispatch } from 'react-redux';
import { updateCode } from '@/store/reducers/editor';
import { PageLoader } from '@/layout';
import { Preview } from './Preview';

export interface EditorProps {}

export const Editor: React.FunctionComponent<EditorProps> = () => {
	const { id } = useParams();
	const { data } = useGenerationSuspenseQuery({ variables: { generationId: Number(id) } });
	const dispatch = useDispatch();

	useEffect(() => {
		if (data.generation?.[0]?.code) {
			dispatch(
				updateCode({
					name: data.generation[0].name,
					code: {
						html: data.generation[0].code.html || '',
						react: data.generation[0].code.react || '',
						dsl: data.generation[0].code.dsl || '',
					},
				})
			);
		}
	}, [data, dispatch]);

	if (!data) {
		return <PageLoader />;
	}

	return (
		<div className='flex flex-1 overflow-hidden'>
			<SplitPane split='vertical' minSize={29} maxSize={-36} defaultSize={1090} onChange={() => {}}>
				<div className='flex flex-1 flex-col h-full overflow-hidden'>
					<MonacoWrapper />
				</div>
				<div className='flex flex-1 flex-col h-full overflow-hidden'>
					<Preview />
				</div>
			</SplitPane>
		</div>
	);
};

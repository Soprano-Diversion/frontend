import { useSelector } from '@/hooks/useStore';
import { useEffect, useRef } from 'react';

export const Preview = () => {
	const { file, language } = useSelector(state => state.editor);
	const iframeRef = useRef<HTMLIFrameElement>(null);

	useEffect(() => {
		if (iframeRef.current) {
			const iframe = iframeRef.current;
			const html = file.html;
			const iframeDoc = iframe.contentDocument;
			iframeDoc?.open();
			iframeDoc?.write(html);
			iframeDoc?.close();
		}
	}, [file]);

	switch (language) {
		case 'html':
			return (
				<div className='iframe-wrapper h-full w-full'>
					<iframe ref={iframeRef} className='h-full w-full' title='preview' />
				</div>
			);
	}
};

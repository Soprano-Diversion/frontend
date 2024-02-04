import { useSelector } from '@/hooks/useStore';
import MonacoEditor from '@monaco-editor/react';
import { useState } from 'react';

export const MonacoWrapper = () => {
	const { file, language } = useSelector(state => state.editor);
	const [loading, setLoading] = useState(true);

	return (
		<MonacoEditor
			height='100%'
			width='100%'
			language={language}
			theme='vs-dark'
			value={file[language]}
			loading={loading}
			onMount={() => setLoading(false)}
		/>
	);
};

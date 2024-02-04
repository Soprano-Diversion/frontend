import { useSelector } from '@/hooks/useStore';
import { updateCode } from '@/store/reducers/editor';
import MonacoEditor from '@monaco-editor/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const MonacoWrapper = () => {
	const { file, language } = useSelector(state => state.editor);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	const onChange = (value: string | undefined) => {
		dispatch(
			updateCode({
				name: file.name,
				code: {
					...file,
					[language]: value,
				},
			})
		);
	};

	return (
		<MonacoEditor
			height='100%'
			width='100%'
			language={language}
			theme='vs-dark'
			value={file[language]}
			loading={loading}
			onChange={onChange}
			onMount={() => setLoading(false)}
		/>
	);
};

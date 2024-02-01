import MonacoEditor from '@monaco-editor/react';

export const MonacoWrapper = () => {
	return <MonacoEditor height='90vh' defaultLanguage='javascript' defaultValue='// some comment' />;
};

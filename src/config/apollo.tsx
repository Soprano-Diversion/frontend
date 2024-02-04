import React from 'react';

import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message, path }) => console.error({ message, path }));
		return;
	}

	if (networkError) {
		const { message, name, stack } = networkError;
		console.error({
			message,
			name,
			stack,
		});
		return;
	}
});

const link = from([
	errorLink,
	createUploadLink({
		uri: 'http://localhost:4000/graphql',
	}),
]);

export const getApolloLink = (token?: unknown) => {
	const authLink = setContext((_, { headers }) => ({
		headers: {
			...headers,
			Authorization: token ? `Bearer ${token}` : '',
			// 'Apollo-Require-Preflight': 'true'
		},
	}));
	return authLink.concat(link);
};

export const GraphQLClient = new ApolloClient({
	cache,
	link: getApolloLink(),
	name: 'sketch-ui-client',
	queryDeduplication: false,
});

const ApolloWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<ApolloProvider client={GraphQLClient}>{children}</ApolloProvider>
);

export default ApolloWrapper;

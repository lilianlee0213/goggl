import React from 'react';
import {useResultsContext} from '../Contexts/ResultContextProvider';
import {useLocation} from 'react-router-dom';
import Loading from './Loading';

const Results = () => {
	const {results, isLoading, getResults, searchTerm} = useResultsContext();
	const location = useLocation();

	if (isLoading) return <Loading />;
	console.log(location.pathname);
	switch (location.pathname) {
		case '/search':
			return 'Search';
		case '/imagesearch':
			return 'Images';
		default:
			return 'Error';
	}
};

export default Results;

import React, {useEffect} from 'react';
import {useResultsContext} from '../Contexts/ResultContextProvider';
import {useLocation} from 'react-router-dom';
import Loading from './Loading';

const Results = () => {
	const {results, isLoading, getResults, searchTerm} = useResultsContext();
	const location = useLocation();

	useEffect(() => {
		getResults('/search?q=javascript');
	}, []);
	if (isLoading) return <Loading />;
	console.log(location.pathname);
	switch (location.pathname) {
		case '/search':
			return (
				<div className="flex flex-wrap justify-btween space-y-6 sm:px-56">
					{/* {results?.results?.map((item) => {
						link, title;
					})} */}
				</div>
			);
		case '/imagesearch':
			return 'Images';
		default:
			return 'Error';
	}
};

export default Results;

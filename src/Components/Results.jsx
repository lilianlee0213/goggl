import React from 'react';
import {useResultsContext} from '../Contexts/ResultContextProvider';
import {useNavigate} from 'react-router-dom';
import Loading from './Loading';

const Results = () => {
	const {results, isLoading, getResults, searchTerm} = useResultsContext();
	const location = useNavigate();
	if (isLoading) return <Loading />;
	return <div>Results</div>;
};

export default Results;

import React, {createContext, useContext, useState} from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com';

export const ResultContextProvider = ({children}) => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	// --> type(url) : /search /imagesearch
	const getResults = async (type) => {
		setIsLoading(true);
		//api call
		const response = await fetch(`${baseUrl}${type}`, {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': process.env.API_KEY,
				'X-RapidAPI-Host': 'google-search72.p.rapidapi.com',
			},
		});
		const data = await response.json();
		setResults(data);
		setIsLoading(false);
	};
	return (
		<ResultContext.Provider
			value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
			{children}
		</ResultContext.Provider>
	);
};

//create a function to easily use the values from the context
export const useResultsContext = () => useContext(ResultContext);

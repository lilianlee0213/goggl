import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import Routes from './Components/Routes';
import Footer from './Components/Footer';

const App = () => {
	const [darkTheme, setDarkTheme] = useState();
	return (
		<div className={darkTheme ? 'dark' : ''}>
			<div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
				<Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
				<Routes />
				<Footer />
			</div>
		</div>
	);
};

export default App;

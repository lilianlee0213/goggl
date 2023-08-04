import React from 'react';
import Navbar from './Components/Navbar';
import Routes from './Components/Routes';
import Footer from './Components/Footer';

const App = () => {
	return (
		<div>
			<div>
				<Navbar />
				<Routes />
				<Footer />
			</div>
		</div>
	);
};

export default App;

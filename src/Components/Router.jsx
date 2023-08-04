import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Results from './Results';
const Router = () => {
	return (
		<div className="p-4">
			<Routes>
				<Route path="/" element={<Navigate to="/search" />} />
				<Route path="/search" element={<Results />} />
				<Route path="/imagesearch" element={<Results />} />
			</Routes>
		</div>
	);
};

export default Router;

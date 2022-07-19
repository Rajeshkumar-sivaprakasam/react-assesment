import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from "./HomeScreen";

// it will denote which page we need to navigate
export const RouteScreen = () => {
	return (
		<Routes>
			<Route path="/" element={<HomeScreen />} />
		</Routes>
	);
};


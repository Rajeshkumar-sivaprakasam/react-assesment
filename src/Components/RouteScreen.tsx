import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';


export const RouteScreen = () => {
  return (
		<Routes>
			<Route path="/" element={<HomeScreen />} />
			<Route path="/user" element={<SecondScreen />} />
		</Routes>
	);
}


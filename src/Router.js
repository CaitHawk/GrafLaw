import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeRouter from './routes/homeRouter';
import AboutRouter from './routes/aboutRouter';
import ContactRouter from './routes/contactRouter';
import ServicesHomeRouter from './routes/servicesHomeRouter';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<App />}
				>
					<Route
						index
						element={<HomeRouter />}
					/>
					<Route
						path='about'
						element={<AboutRouter />}
					/>
					<Route
						path='services'
						element={<ServicesHomeRouter />}
					/>
					<Route
						path='contact'
						element={<ContactRouter />}
					/>
					<Route
						path='*'
						element={
							<main>
								<h1>path catching here: (error)</h1>
							</main>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;

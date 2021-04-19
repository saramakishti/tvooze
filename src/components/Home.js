import React from "react";
import { Route } from "react-router-dom";
import { TVShowList, CategoriesList, Header } from ".";

const Home = (props) => {
	return (
		<div>
			<Header />
			<main>
				<Route path='/'>
					<TVShowList />
				</Route>
				<Route path='/categories'>
					<CategoriesList />
				</Route>
			</main>
		</div>
	);
};

export default Home;

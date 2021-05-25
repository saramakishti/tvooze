import React from "react";
import { Switch, Route } from "react-router-dom";
import { TVShowList, CategoriesList, Header } from ".";

const Home = (props) => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/'>
					<TVShowList />
				</Route>
				<Route path='/categories'>
					<CategoriesList />
				</Route>
			</Switch>
		</div>
	);
};

export default Home;

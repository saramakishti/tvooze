import React from "react";
import { connect } from "react-redux";
import { capitalize } from "../helpers";
import TVShowMiniCard from "./TVShowMiniCard";

const CategoriesList = (props) => {
	const { allCategories } = props;

	const { favorites } = allCategories;

	const getCategoryCount = (category) => {
		return allCategories[category].length;
	};

	const getOtherCategories = () => {
		return Object.keys(allCategories).filter(
			(category) => category !== "favorites"
		);
	};

	return (
		<div>
			<div>All Categories</div>
			<div>Favorites ({getCategoryCount("favorites")})</div>
			{favorites.map((show, index) => {
				return <TVShowMiniCard key={index} tvShow={show} disableActions />;
			})}
			{getOtherCategories().map((category) => {
				return (
					<div>
						{capitalize(category)} ({getCategoryCount(category)})
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		allCategories: state.CategoriesReducer,
	};
};

export default connect(mapStateToProps, null)(CategoriesList);

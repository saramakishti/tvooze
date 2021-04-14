import React from "react";
import { connect } from "react-redux";
import TVShowMiniCard from "./TVShowMiniCard";
import "../styles/landing.css";

const TVShowList = ({ data }) => {
	let innerContent;

	if (!data) innerContent = <div>No Data Available!</div>;
	else
		innerContent = (
			<div className='landing-page-body'>
				{data.map(({ show }) => {
					return <TVShowMiniCard tvShow={show} />;
				})}
			</div>
		);

	return (
		<div className='landing-page-container'>
			<div className='landing-page-header'>
				<h1>Welcome to TVOOZE!</h1>
				<h1>
					<a href='/'>All TV Shows</a>
				</h1>
				<h1>
					<a href='/'>Categories</a>
				</h1>
			</div>
			{innerContent}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		data: state.TVShowReducer.data,
	};
}

export default connect(mapStateToProps, null)(TVShowList);

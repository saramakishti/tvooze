import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions";
import TVShowMiniCard from "./TVShowMiniCard";
import "../styles/style.css";

const TVShowList = (props) => {
	const { data, loading, fetchData } = props;

	React.useEffect(() => {
		fetchData();
	});

	let innerContent;

	if (!data && loading) innerContent = <div>No Data Available!</div>;
	else
		innerContent = (
			<div className='landing-page-body'>
				{data.map(({ show }, index) => {
					return <TVShowMiniCard key={index} tvShow={show} />;
				})}
			</div>
		);

	return <div className=''>{innerContent}</div>;
};

const mapStateToProps = (state) => {
	return {
		data: state.TVShowReducer.data,
		loading: state.TVShowReducer.loading,
	};
};

export default connect(mapStateToProps, { fetchData })(TVShowList);

import React from "react";
import { addToFavorites } from "../redux/actions";
import { validateValue } from "../helpers";
import { connect } from "react-redux";

const ImageContainer = ({ image }) => {
	return <img src={image} alt='image' width={200} />;
};

const TVShowMiniCard = (props) => {
	const { tvShow, addToFavorites, favorites } = props;

	const { name, genres, url } = tvShow;

	const image = tvShow.image ? tvShow.image.medium : undefined;

	const isAdded = favorites.find((item) => item.id === tvShow.id);

	const handleChange = (tvShow) => () => {
		addToFavorites(tvShow);
	};

	return (
		<div className='card-container'>
			<ImageContainer image={image} />
			<div className='boldText'>{name}</div>
			<div className='card-inner-content'>
				<div>{validateValue(genres.join(", "))}</div>
				<a href={url} rel='noreferrer' target='_blank'>
					Redirect to TVMaze &#128256;
				</a>
				<button className='action-button' onClick={() => {}}>
					View Details
				</button>
				<button
					className='action-button'
					onClick={handleChange(tvShow)}
					disabled={isAdded}>
					{isAdded ? "Added to Favorites" : "Add to Favorites"}
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		favorites: state.CategoriesReducer.favorites,
	};
};

export default connect(mapStateToProps, { addToFavorites })(TVShowMiniCard);

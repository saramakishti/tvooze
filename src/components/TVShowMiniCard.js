import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { addToFavorites } from "../redux/actions";
import { validateValue } from "../helpers";
import { connect } from "react-redux";

const ImageContainer = ({ image }) => {
	return <img src={image} alt='' width={200} />;
};

const TVShowMiniCard = (props) => {
	const { tvShow, disableActions, addToFavorites, favorites } = props;

	const { name, genres, url } = tvShow;

	const history = useHistory();

	const image = tvShow.image ? tvShow.image.medium : undefined;

	const isAdded = favorites.find((item) => item.id === tvShow.id);

	const handleChange = (tvShow) => () => {
		addToFavorites(tvShow);
	};

	const onRedirect = (tvShow) => (e) => {
		const id = tvShow.id;
		history.push(`/${id}`);
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
				{!disableActions && (
					<div>
						<button className='action-button' onClick={onRedirect(tvShow)}>
							View Details
						</button>
						<button
							className='action-button'
							onClick={handleChange(tvShow)}
							disabled={isAdded}>
							{isAdded ? "Added to Favorites" : "Add to Favorites"}
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		favorites: state.CategoriesReducer.favorites,
	};
};

TVShowMiniCard.defaultProps = {
	tvShow: {},
	disableActions: false,
};

TVShowMiniCard.propTypes = {
	disableActions: PropTypes.bool,
	tvShow: PropTypes.object,
};

export default connect(mapStateToProps, { addToFavorites })(TVShowMiniCard);

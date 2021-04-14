import React from "react";

const InformationCard = (props) => {
	const { value, label } = props;
	return (
		<div>
			{value}
			<p style={{ fontWeight: "bold" }}>{label}</p>
		</div>
	);
};

const TVShowMiniCard = (props) => {
	const { tvShow } = props;

	const { name, genres, rating, premiered, url } = tvShow;

	return (
		<div>
			<div
				style={{
					background: `url(${tvShow.image.medium})`,
					backgroundRepeat: "no-repeat",
					width: 400,
					height: 200,
				}}
			/>
			<div style={{ fontWeight: "bold" }}>{name}</div>
			<div>
				<InformationCard value={genres.join(", ")} label='Genres' />
				<InformationCard value={rating.average} label='Rating' />
				<InformationCard value={premiered} label='Year' />
				<a href={url} rel='noreferrer' target='_blank'>
					Redirect
				</a>
			</div>
		</div>
	);
};

export default TVShowMiniCard;

import React from "react";

const validateValue = (value) => {
	if (value !== null && value !== undefined) return value;
	else return " - ";
};

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

	const { name, genres, rating, premiered, network, url } = tvShow;

	return (
		<div
			style={{
				border: "1px solid gray",
				width: 250,
				height: "100%",
			}}>
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

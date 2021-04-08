import React, { useEffect, useState } from "react";
import { API_ENDPOINT } from "../api";
import TVShowMiniCard from "./TVShowMiniCard";

const TVShowList = (props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(API_ENDPOINT)
			.then((response) => response.json())
			.then((response) => setData(response));
	}, []);

	console.log("Hi data", data);
	return (
		<div>
			{data.map(({ show }) => {
				console.log("Hello showw", show);
				return <TVShowMiniCard tvShow={show} />;
			})}
		</div>
	);
};

export default TVShowList;

import { fetchJSON } from "../api";

export const ACTIONS = {
	FETCH_DATA: "FETCH_DATA",
};

export const fetchTVShows = (data) => {
	return {
		type: ACTIONS.FETCH_DATA,
		payload: data,
	};
};

export const fetchData = () => {
	return async function (dispatch) {
		const response = await fetchJSON();
		return dispatch(fetchTVShows(response));
	};
};

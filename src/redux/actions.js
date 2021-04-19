import { fetchJSON } from "../api";

export const ACTIONS = {
	FETCH_DATA: "FETCH_DATA",
	ADD_TO_FAVORITES: "ADD_TO_FAVORITES",
	ADD_CATEGORY: "ADD_CATEGORY",
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

export const addToFavorites = (item) => {
	return {
		type: ACTIONS.ADD_TO_FAVORITES,
		payload: item,
	};
};

export const addCategory = (item) => {
	return {
		type: ACTIONS.ADD_CATEGORY,
		payload: item,
	};
};

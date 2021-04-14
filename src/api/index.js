export const API_ENDPOINT = "http://api.tvmaze.com/schedule?country=US";

export const fetchJSON = async () => {
	const response = await fetch(API_ENDPOINT);
	return await response.json();
};

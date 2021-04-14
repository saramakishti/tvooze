import { combineReducers } from "redux";
import { ACTIONS } from "./actions";

const initialState = {
	data: null,
	categories: {
		favorites: [],
	},
};

const TVShowReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.FETCH_DATA: {
			return {
				...state,
				data: action.payload,
			};
		}
		default:
			return state;
	}
};

export default combineReducers({ TVShowReducer });

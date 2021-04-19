import { combineReducers } from "redux";
import { ACTIONS } from "./actions";

const initialState = {
	loading: true,
	data: null,
};

const TVShowReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.FETCH_DATA: {
			return {
				...state,
				loading: false,
				data: action.payload,
			};
		}
		default:
			return state;
	}
};

const CategoriesReducer = (state = { favorites: [] }, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TO_FAVORITES: {
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};
		}
		default:
			return state;
	}
};

export default combineReducers({ TVShowReducer, CategoriesReducer });

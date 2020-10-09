import {
	FETCH_SEARCH_START,
	FETCH_SEARCH_SUCCESS,
	FETCH_SEARCH_FAILURE,
	ResultsActionTypes,
} from "./results.types";



import { StateTypes } from "./results.types";

const INITIAL_STATE: StateTypes = {
	results: [],
	queries: null,
	isFetching: false,
	errorMessage: "",
};

const resultsReducer = (state = INITIAL_STATE, action: ResultsActionTypes) => {
	switch (action.type) {
		case FETCH_SEARCH_START:
			return {
				...state,
				isFetching: true,
			};
		case FETCH_SEARCH_SUCCESS:
			return {
				...state,
				isFetching: false,
				results: action.payload ? [...action.payload.items] : [],
				queries: action.payload.queries,
				errorMessage: "",
			};
		case FETCH_SEARCH_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default resultsReducer;

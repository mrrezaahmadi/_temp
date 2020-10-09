import {
	FETCH_SEARCH_FAILURE,
	FETCH_SEARCH_SUCCESS,
	FETCH_SEARCH_START,
	ResultsActionTypes,
	ResultsTypes,
	State,
} from "./results.types";

// Constants
import {
	GOOGLE_API_KEY,
	SEARCH_ENGINE_ID,
} from "../../constants/google-CSE.config";
import { ThunkAction } from "redux-thunk";

export const fetchSearchStart = (): ResultsActionTypes => ({
	type: FETCH_SEARCH_START,
});

export const fetchSearchSuccess = (
	results: ResultsTypes
): ResultsActionTypes => ({
	type: FETCH_SEARCH_SUCCESS,
	payload: results,
});

export const fetchSearchFailure = (
	errorMessage: string
): ResultsActionTypes => ({
	type: FETCH_SEARCH_FAILURE,
	payload: errorMessage,
});

export const fetchSearchStartAsync = (
	searchValue: string = "",
	start: number = 0
): ThunkAction<any, State, any, ResultsActionTypes> => {
	return (dispatch) => {
		dispatch(fetchSearchStart());
		fetch(
			`https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${searchValue}&start=${start}`
		)
			.then((response) => response.json())
			.then((data) => dispatch(fetchSearchSuccess(data)))
			.catch((error) => dispatch(fetchSearchFailure(error)));
	};
};

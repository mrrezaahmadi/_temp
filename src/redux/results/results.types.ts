export const FETCH_SEARCH_START = "FETCH_SEARCH_START";
export const FETCH_SEARCH_SUCCESS = "FETCH_SEARCH_SUCCESS";
export const FETCH_SEARCH_FAILURE = "FETCH_SEARCH_FAILURE";

export interface Queries {
	nextPage: any[];
	previousPage: any[];
	request: any[];
}

export interface StateTypes {
	results: any[];
	queries: Queries | any;
	isFetching: boolean;
	errorMessage: string;
}

export interface ResultsTypes {
	items: any;
	queries: any;
}

export interface State {
	results: StateTypes;
}

interface FetchSearchStartAction {
	type: typeof FETCH_SEARCH_START;
}

interface FetchSearchSuccessAction {
	type: typeof FETCH_SEARCH_SUCCESS;
	payload: ResultsTypes;
}

interface FetchSearchFailureAction {
	type: typeof FETCH_SEARCH_FAILURE;
	payload: string;
}

export type ResultsActionTypes =
	| FetchSearchStartAction
	| FetchSearchSuccessAction
	| FetchSearchFailureAction;

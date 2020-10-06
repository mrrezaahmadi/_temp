import resultsActionTypes from './results.types'

const INITIAL_STATE = {
    resultItems: [],
    queries: null,
    isFetching: false,
    errorMessage: '',
}



const resultsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case resultsActionTypes.FETCH_SEARCH_START:
            return {
                ...state,
                isFetching: true
            }
        case resultsActionTypes.FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                resultItems: action.payload ? [...action.payload.items] : [],
                queries: action.payload.queries,
                errorMessage: "",
            }
        case resultsActionTypes.FETCH_SEARCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default resultsReducer
import resultsActionTypes from './results.types'

// Constants
import { GOOGLE_API_KEY, SEARCH_ENGINE_ID } from '../../constants/google-custom-search-engine.config'

export const fetchSearchStart = () => ({
    type: resultsActionTypes.FETCH_SEARCH_START
})

export const fetchSearchSuccess = results => ({
    type: resultsActionTypes.FETCH_SEARCH_SUCCESS,
    payload: results
})

export const fetchSearchFailure = errorMessage => ({
    type: resultsActionTypes.FETCH_SEARCH_FAILURE,
    payload: errorMessage
})

export const fetchSearchStartAsync = (searchValue = "", start = 0) => {
    return dispatch => {
        dispatch(fetchSearchStart())
        fetch(`https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${searchValue}&start=${start}`)
            .then(response => response.json())
            .then(data => dispatch(fetchSearchSuccess(data)))
            .catch(error => dispatch(fetchSearchFailure(error)))
    }
}
import { combineReducers } from 'redux'

import resultsReducer from './results/results.reducer'

const rootReducer = combineReducers({
    results: resultsReducer,
})

export default rootReducer
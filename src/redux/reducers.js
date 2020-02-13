import { combineReducers } from 'redux'

const articles = (state = [], action) => {
    switch(action.type) {
        // add case "FETCH_ARTICLES"
        case 'FETCH_MAKES':
            return action.value
        default:
            return state
    }
}

export default combineReducers({ articles })
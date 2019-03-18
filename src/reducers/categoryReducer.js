import { FETCH_REDDIT_DATA, FETCH_REDDIT_DATA_SUCCESS } from '../actions/constants';


const initialState = {};

const loadRedditData = (state, action) => {
    const { key, categoryData: { data } } = action.data;
    state = {
        ...state,
        categoryData: data,
        selectedCategory: key
    }
    return state;
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REDDIT_DATA_SUCCESS:
            return loadRedditData(state, action);
        default:
            return state;
    }
};

export default categoryReducer;
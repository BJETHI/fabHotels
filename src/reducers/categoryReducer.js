import { FETCH_REDDIT_DATA_SUCCESS, ENABLE_LOADER } from '../actions/constants';


const initialState = {
    loader: true,
};

const loadRedditData = (state, action) => {
    const { key, categoryData: { data } } = action.data;
    state = {
        ...state,
        categoryData: data,
        selectedCategory: key,
        loader: false,
    }
    return state;
}

const enableLoader = (state) => {
    state = {
        ...state,
        loader: true,
    }
    return state;
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REDDIT_DATA_SUCCESS:
            return loadRedditData(state, action);
        case ENABLE_LOADER:
            return enableLoader(state);
        default:
            return state;
    }
};

export default categoryReducer;
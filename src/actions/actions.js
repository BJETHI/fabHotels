import { FETCH_REDDIT_DATA_SUCCESS } from './constants';

export const fetchRedditData = key => {
    return dispatch => {
        fetch(`https://www.reddit.com/r/${key}.json`)
            .then(response => response.json())
            .then(categoryData => dispatch(fetchRedditDataSuccess({ categoryData, key })));
    }
};

export const fetchRedditDataSuccess = data => ({
    type: FETCH_REDDIT_DATA_SUCCESS,
    data,
});
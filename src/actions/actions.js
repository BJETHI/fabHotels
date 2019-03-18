import fetch from 'isomorphic-unfetch'
import { FETCH_REDDIT_DATA_SUCCESS, ENABLE_LOADER } from './constants';

export const fetchRedditData = key => {
    return async function (dispatch) {
        try {
            let response = await fetch(`https://www.reddit.com/r/${key}.json`);
            let categoryData = await response.json();
            return dispatch(fetchRedditDataSuccess({ categoryData, key }))
        }
        catch (error) {
            console.error(error)
        }
    }
};

export const fetchRedditDataSuccess = data => ({
    type: FETCH_REDDIT_DATA_SUCCESS,
    data,
});

export const initialiseLoaderAction = data => ({
    type: ENABLE_LOADER,
});
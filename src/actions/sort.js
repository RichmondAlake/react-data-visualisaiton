import {SORT_DATA} from "./types";
import mockData from '../data/MOCK_DATA.json';

export const sortData = (field) => dispatch => {
    dispatch({
        type: SORT_DATA,
        payload: {
            mockData,
            field
        }
    });
};

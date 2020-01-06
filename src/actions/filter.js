import {FILTER_DATA} from "./types";
import mockData from '../data/MOCK_DATA.json';

export const filterData = (filterText) => dispatch => {
    dispatch({
        type: FILTER_DATA,
        payload: {
            mockData,
            filterText
        }
    });
};

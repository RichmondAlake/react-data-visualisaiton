import mockData from '../data/MOCK_DATA'
import {FILTER_DATA, SORT_DATA} from "../actions/types";

const initialState = {
    mockData,
    filterText: ''
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_DATA:
            return filterOperation({
                ...action.payload
            });
        case SORT_DATA:
            return sortingOperation({
                ...action.payload
            });
        default:
            return state
    }
};

// @desc: Filters the mockData properties by First name and Last name
// @returns: Object
const filterOperation = (state) => {
    // State is mockData, need to find a way to retrieve filterText from the store
    return {
        mockData: state.mockData.filter(data => {
            return (data['first_name'] !== null && data['first_name'].toLowerCase().includes(state.filterText.toLowerCase()))
                || (data['last_name'] !== null && data['last_name'].toLowerCase().includes(state.filterText.toLowerCase()));
        }),
        filterText: state.filterText
    }
};

const sortingOperation = (state) => {
    // State is mockData, need to find a way to retrieve filterText from the store
    return {
        mockData: state.mockData.sort((a, b) => {
            return a[state.field] < b[state.field] ? -1 : 1
        }),
        filterText: state.field
    }
};

export default filterReducer;

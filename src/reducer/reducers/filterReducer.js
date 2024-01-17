import { TYPES_FILTER } from "../actions/filterActions";

export const initialStateFilter = {
    position: "",
    location: "",
    fullTime: false,
};

export function filterReducer(state, action) {

    let { type, payload } = action;

    switch (type) {
        case TYPES_FILTER.SET_POSITION: {
            let { position } = payload;
            return {
                ...state,
                position
            }
        }
        case TYPES_FILTER.SET_LOCATION: {
            let { location } = payload;
            return {
                ...state,
                location
            }
        }

        case TYPES_FILTER.SET_FULLTIME: {
            let { fullTime } = payload;
            return {
                ...state,
                fullTime
            }
        }

        default:
            return state;
    }

}
import { TYPES_PAGINATION } from "../actions/paginationActions";

export const initialDataPagination = {
    page: 1,
    amount: 5
}

export function paginationReducer(state, action) {
    let { type, payload } = action;

    switch (type) {
        case TYPES_PAGINATION.SET_AMOUNT: {
            let { amount } = payload;
            return {
                ...state,
                amount: amount
            }
        }

        case TYPES_PAGINATION.SET_PAGE: {
            // let { page } = payload;

            return {
                ...state,
              page:payload.page
            }
        }


        default:
            return state;
    }
}
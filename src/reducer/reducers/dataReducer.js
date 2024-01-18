import { TYPES_DATA } from "../actions/dataActions"


export const initialData = {
    data: []
}

export function dataReducer(state, action) {

    let { type, payload } = action;

    switch (type) {
        case TYPES_DATA.INITIAL_DATA: {

            let { dataJson, amount, page } = payload;
            console.log(payload);

            return {

                data: sliceArray(page, dataJson, amount)
            }
        }

        case TYPES_DATA.LOAD_MORE_DATA: {

            let { data } = state;
            let { dataJson, amount, page } = payload;

            if (data.length >= dataJson.length) return { ...state };

            let newData = sliceArray(page, dataJson, amount);
            console.log([...newData]);
            return {
                ...state,
                data: [ ...newData]
            }
        }



        default:
            return state;
    }



}

function sliceArray(page, array, amount) {

    let start = 0;
    let end = page * amount;

    return array.slice(start, end);


}
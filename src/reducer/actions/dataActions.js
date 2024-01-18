export const TYPES_DATA = {

    INITIAL_DATA: "INITIAL_DATA",
    LOAD_MORE_DATA: "LOAD_MORE_DATA"

}

export const loadMoreDataAction = (dataJson, amount, page) => ({
    type: TYPES_DATA.LOAD_MORE_DATA,
    payload: { dataJson, amount, page },
});
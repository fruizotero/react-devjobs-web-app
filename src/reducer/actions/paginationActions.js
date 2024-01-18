export const TYPES_PAGINATION = {
    SET_PAGE: "SET_PAGE",
    SET_AMOUNT: "SET_AMOUNT"
}

export const setPageAction = (currentPage) => ({
    type: TYPES_PAGINATION.SET_PAGE,
    payload: { page: currentPage + 1 },
});
export const TYPES_FILTER = {
    SET_POSITION: "SET_POSITION",
    SET_LOCATION: "SET_LOCATION",
    SET_FULLTIME: "SET_FULLTIME"
}

export const setPositionAction = (position) => ({ type: TYPES_FILTER.SET_POSITION, payload: { position } })
export const setLocationAction = (location) => ({ type: TYPES_FILTER.SET_LOCATION, payload: { location } })
export const setFullTimeAction = (fullTime) => ({ type: TYPES_FILTER.SET_FULLTIME, payload: { fullTime } })
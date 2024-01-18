/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useReducer, useState } from "react";

import dataJson from "../assets/data.json";

import {
  filterReducer,
  initialStateFilter,
} from "../reducer/reducers/filterReducer";
import {
  setFullTimeAction,
  setLocationAction,
  setPositionAction,
} from "../reducer/actions/filterActions";
import {
  initialDataPagination,
  paginationReducer,
} from "../reducer/reducers/paginationReducer";
import { dataReducer, initialData } from "../reducer/reducers/dataReducer";
import { loadMoreDataAction } from "../reducer/actions/dataActions";
import { setPageAction } from "../reducer/actions/paginationActions";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  let [jobs, setJobs] = useState([]);
  let [jobsNotFiltered, setJobsNotFiltered] = useState([]);
  let [hiddenButton, setHiddenButton] = useState(false);

  const [statePagination, dispatchPagination] = useReducer(
    paginationReducer,
    initialDataPagination
  );

  const [stateData, dispatchData] = useReducer(dataReducer, initialData);

  const [stateFilter, dispatchFilter] = useReducer(
    filterReducer,
    initialStateFilter
  );

  let { page, amount } = statePagination;

  let { data } = stateData;

  useEffect(() => {
    dispatchData(loadMoreDataAction(dataJson, amount, page));
  }, [page]);

  useEffect(() => {
    setJobs(data);
    if (page == 1) {
      setJobsNotFiltered(data);
    }
  }, [data]);

  const loadMore = () => {
    dispatchPagination(setPageAction(page));
  };

  const setLocation = (location) => dispatchFilter(setLocationAction(location));
  const setPosition = (position) => dispatchFilter(setPositionAction(position));
  const setFullTime = (fullTime) => dispatchFilter(setFullTimeAction(fullTime));

  const handleReset = () => {
    setHiddenButton(false);
    setFullTime(false);
    setPosition("");
    setLocation("");
    setJobs(jobsNotFiltered);
  };

  const handleSearch = () => {
    let { position, location, fullTime } = stateFilter;

    setHiddenButton(true);

    const filters = [];
    if (position !== "") {
      filters.push(position);
    }

    if (location !== "") {
      filters.push(location);
    }

    if (fullTime) {
      filters.push("full time");
    }

    const stringRegex = filters.join(".*");

    if (stringRegex != "") {
      const regex = new RegExp(stringRegex, "i");
      const filteredJobs = dataJson.filter((job) =>
        regex.test(`${job.position}.*${job.location}.*${job.contract}`)
      );

      setJobs(filteredJobs);
    } else {
      handleReset();
    }
  };

  let values = {
    hiddenButton,
    handleSearch,
    handleReset,
    setLocation,
    setPosition,
    setFullTime,
    stateFilter,
    jobs,
    loadMore,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataContext;

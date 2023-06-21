/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import data from "../assets/data.json";

const DataContext = createContext();

const initialState = {
  position: "",
  location: "",
  fullTime: "",
};

export const DataProvider = ({ children }) => {
  let [loadJobs, setLoadJobs] = useState(1);
  let [checked, setChecked] = useState(false);
  let [hiddenButton, setHiddenButton] = useState(false);
  let [filter, setFilter] = useState(initialState);
  let [amountJobs, setAmountJobs] = useState([]);

  const loadJobsFunc = (loadJobs) => {
    let items = 5;
    let begin = (loadJobs - 1) * items;
    let end = begin + items;
    let tmpArray = data.slice(begin, end);
    return tmpArray;
  };

  useEffect(() => {
    if (loadJobs == 1) {
      let array = loadJobsFunc(loadJobs);
      setAmountJobs(array);
    } else {
      let array = loadJobsFunc(loadJobs);
      setAmountJobs([...amountJobs, ...array]);
    }
  }, [loadJobs]);

  useEffect(() => {
    let tmp = { fullTime: checked ? "full time" : "" };
    setFilter({ ...filter, ...tmp });
  }, [checked]);

  const handleLoad = () => {
    setLoadJobs(loadJobs + 1);
  };

  const handleReset = () => {
    setFilter(initialState);
    setLoadJobs(1);
    setAmountJobs(loadJobsFunc(loadJobs));
    setHiddenButton(false);
  };

  const handleSearch = () => {
    let { position, location, fullTime } = filter;
    let tmp = [];

    if (position == "" && location == "" && fullTime == "") {
      handleReset();
      return;
    }

    setHiddenButton(true);

    data.forEach((el) => {
      let isValid = true;
      let elPosition = el.position.toLowerCase();
      let elLocation = el.location.toLowerCase();
      let elContract = el.contract.toLowerCase();

      if (position != "" && isValid) {
        isValid = elPosition.includes(position.toLowerCase());
      }
      if (location != "" && isValid) {
        isValid = elLocation.includes(location.toLowerCase());
      }
      if (fullTime != "" && isValid) {
        isValid = elContract.includes("full time");
      }

      if (isValid) tmp.push(el);
    });

    setAmountJobs(tmp);
  };

  const handleFilter = (value) => {
    setFilter({ ...filter, ...value });
  };

  const handleChechobox = () => {
    setChecked(!checked);
  };

  let values = {
    data,
    filter,
    amountJobs,
    hiddenButton,
    handleLoad,
    handleFilter,
    handleChechobox,
    handleSearch,
    handleReset,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataContext;

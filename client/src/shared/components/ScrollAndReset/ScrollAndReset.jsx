import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { CLEAR_ADD_NOTICE } from "../../../redux/constants/actionTypes";

const ScrollAndReset = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: CLEAR_ADD_NOTICE });
    window.scrollTo(0, 0);
  }, [dispatch]);
};

export default ScrollAndReset;

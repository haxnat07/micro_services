/* ACTION TYPES */
import {
    QUOTATION_LIST_MY_REQUEST,
    QUOTATION_LIST_MY_SUCCESS,
    QUOTATION_LIST_MY_FAIL,
    QUOTATION_LIST_MY_RESET,
  
  } from "../constants/quotationConstants";

/* REDUCER USED TO GET DATA OF ALL THE QUOTATIONS PLACED BY USER */
export const quotationListMyReducer = (state = { quotations: [] }, action) => {
    switch (action.type) {
      case QUOTATION_LIST_MY_REQUEST:
        return {
          loading: true,
        };
  
      case QUOTATION_LIST_MY_SUCCESS:
        return {
          loading: false,
          quotations: action.payload,
        };
  
      case QUOTATION_LIST_MY_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      // WHEN USER LOGS OUT WE WANT ALL DATA REGARDING QUOTATIONS TO BE RESET AS WELL
      case QUOTATION_LIST_MY_RESET:
        return { quotations: [] };
  
      default:
        return state;
    }
  };
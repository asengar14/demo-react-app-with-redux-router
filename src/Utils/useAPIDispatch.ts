/**
 * Implementation of custom hooks to dispatch action for API call
 */

import { useDispatch } from "react-redux";
import * as ActionType from "../Actions";
import { useEffect } from "react";

export const useAPIDispatch = (
  serviceName: string,
  requestPayload: string,
  serviceType: string
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: ActionType.FETCH_ACTION,
      requestPayload,
      serviceName,
      serviceType: serviceType || "POST"
    });
  }, [dispatch, requestPayload, serviceName]);
};

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/FetchStatusSlice";

function FetchItem() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch(`http://localhost:8080/items`, { signal })
      .then((res) => res.json())
      .then(({items}) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingEnded());
        dispatch(itemsActions.addInitialItem(items));
      });

    // return () => {
    //   controller.abort();
    // };
  }, [fetchStatus]);

  return (
    <>
    </>
  );
}

export default FetchItem;

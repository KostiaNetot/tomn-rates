import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/actions";

const RatesTable = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchData());
    console.log(data);
  }, []);

  return (
    <div>
      RatesTable
    </div>
  );
};

export default RatesTable;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/actions";
import InfiniteScroll from 'react-infinite-scroller';

import './RatesTable.css';
import RatesTableItem from "../rates-table-item/RatesTableItem";
import Loader from "../loader/Loader";

const ITEMS_PER_PAGE = 15;

const RatesTable = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(state => state);

  const [ displayedItems, setDisplayedItems ] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const renderList = () => {
    if (data) {
      const rates = Object.entries(data.rates);

      return(
        <React.Fragment>
          {/*<div className="currency-flag currency-flag-cad"></div>*/}
          <h3>Based currency: {data.base}</h3>
          <div className='rates-table'>
            <InfiniteScroll
              initialLoad={false}
              pageStart={1}
              loadMore={page => setDisplayedItems(page * ITEMS_PER_PAGE)}
              hasMore={rates.length > displayedItems}
            >
              {
                rates.slice(0, displayedItems).map((rate, i) => {
                  return <RatesTableItem
                    key={i}
                    name={rate[0]}
                    value={rate[1]}
                  />
                })
              }
            </InfiniteScroll>
          </div>
        </React.Fragment>
      )
    }
  };

  return (
    <div className='rates-table-wrapper'>
      { isLoading ? <Loader/> : renderList() }
    </div>
  );
};

export default RatesTable;

import React from 'react';

import './RatesTableItem.css'

const RatesTableItem = ({ name, value }) => {
  const flagClassName = `currency-flag currency-flag-${name.toLowerCase()}`;

  return (
    <div className='rates-table-item'>
      <div className="country">
        <div className={flagClassName}></div>
        <div className='name'>{ name }: </div>
      </div>
      <div className='value'>{ value.toFixed(4) }</div>
    </div>
  );
};

export default RatesTableItem;

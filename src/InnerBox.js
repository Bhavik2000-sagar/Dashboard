import React from "react";
import CountUp from 'react-countup';

const InnerBox = ({name, number,sym}) => {
  return (
    <>
      <div className="inner-box">
        <h3>{name}</h3>
        <div className="num">
            <CountUp end={number} />
            <span>{sym}</span>
        </div>
      </div>
    </>
  );
};

export default InnerBox;

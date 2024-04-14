import React from "react";
import IncomePageLeft from "./yash/IncomePageLeft";
import IncomePageRight from "./vansh/IncomePageRight";
const IncomePage = () => {
  return (
    <>
      <div className='category_page'>
      <div className='category_page_left'>
        <IncomePageLeft/>
      </div>
      <div className='category_page_right'>
        <IncomePageRight/>
      </div>
      </div>
    </>
  );
};

export default IncomePage;

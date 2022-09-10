import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const NewPagnation = ({ pageCount, changePage }) => {
  return (
    <div>
      {/* creating pagination */}
      <ReactPaginate
        className="    flex transition-all duration-150 text-slate-600 font-medium  items-center p-2 rounded-3xl bg-slate-900 w-fit justify-center 
gap-4  text-[1.5rem] my-10"
        previousLabel={<AiOutlineLeft></AiOutlineLeft>}
        nextLabel={<AiOutlineRight></AiOutlineRight>}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        pageClassName={"k"}
      />
    </div>
  );
};

export default NewPagnation;

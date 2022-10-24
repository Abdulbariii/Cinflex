import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const NewPagnation = ({ pageCount, changePage }) => {
  return (
    <div>
      {/* creating pagination */}
      <ReactPaginate
        className=" mt-12 flex transition-all duration-150 text-white border-2 border-white font-Main  items-center     justify-center 
gap-4  text-3xl px-12 py-2"
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

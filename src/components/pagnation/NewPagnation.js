import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const NewPagnation = ({ pageCount, changePage }) => {
  return (
    <div>
      {/* creating pagination */}
      <ReactPaginate
        className=" hover:border-opacity-50 outline-none border-opacity-30 border-2 border-rose-500   flex transition-all duration-150 text-slate-600 font-medium p-2 items-center  rounded-3xl bg-slate-900 w-fit justify-center 
gap-4  text-xl my-12"
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

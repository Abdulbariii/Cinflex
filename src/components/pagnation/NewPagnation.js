import React from 'react'
import ReactPaginate from 'react-paginate'
import './pagination.css'

const NewPagnation = ({pageCount,changePage}) => {
  return (
    <div>
      {/* creating pagination */}
<ReactPaginate className="text-white flex align-middle justify-center 
gap-4  text-[1.5rem] my-10"
previousLabel={'Previous'}
nextLabel={'Next'}
pageCount={pageCount}
onPageChange={changePage}
containerClassName={'paginationBttns'}
previousLinkClassName={'previousBttn'}
nextLinkClassName={'nextBttn'}
disabledClassName={'paginationDisabled'}
activeClassName={'paginationActive'}
pageClassName={'k'}
/>
    </div>
  )
}

export default NewPagnation

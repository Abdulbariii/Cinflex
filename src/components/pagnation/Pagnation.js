import React from 'react'
import { Button } from 'react-bootstrap';
import useTheme from "../../hook/useTheme";

const Pagnation = () => {

const {getPage,page}=useTheme();


const one=()=>{
   
}

const pageClick=()=>{

console.log(page);
}

  return (
    <div>
        
  <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <p class="page-link"  tabindex="-1">Previous</p>
    </li>
    <li class="page-item active"><p class="page-link" href="#" onClick={ ()=>getPage(6)}>1 <span class="sr-only">(current)</span></p></li>
    <li class="page-item ">
      <p class="page-link" onClick={()=>getPage(12)} >2 </p>
    </li>
    <li class="page-item"><p class="page-link" href="#" onClick={()=>getPage(18)}>3</p></li>
    <li class="page-item">
      <p class="page-link" onClick={()=>getPage(page+6)} >Next</p>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Pagnation


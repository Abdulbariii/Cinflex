import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../hook/useFetch';
import { AiOutlineClose } from "react-icons/ai";
import useTheme from '../hook/useTheme';
const Trailar = () => {
    const {  color } = useTheme();





    
      const {id}=useParams();
  const url=`https://movies-app1.p.rapidapi.com/api/trailers/${id}`;
  const { data, isPending, error }= useFetch(url);
    const Navigate=useNavigate();


  return (


    <div className='
    absolute overflow-y-hidden top-[5rem] backdrop-blur-md  h-[100vh] w-[98vw] flex justify-center  mt-1'>
        
<motion.button
 whileHover={{ scale: 1.2, rotate: 90}}
 whileTap={{
   scale: 0.8,
   rotate: -90,
   borderRadius: "100%"
 }}
className={`right-10 top-5  absolute`} onClick={()=>{Navigate(`/movieDetail/${id}`)}} >

<AiOutlineClose className={`text-[2rem] ${color} text-white`}/>

</motion.button>

        {
            data&& <div className='hh z-50 mt-[10%] '>

<motion.embed   initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
    
  }} 
  


  
  type="video/webm" src={data.result[0].embed} className={'w-[500px] h-[400px]'}/>
            </div>
        }
      
     
    </div>
  )
}



export default Trailar

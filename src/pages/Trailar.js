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
    lg:top-0 
    md:top-0
    top-0

    
    left-0
    absolute overflow-y-hidden  backdrop-blur-md  h-full w-full flex justify-center  '>

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
{isPending&& <h1 className='text-white text-[3rem]'>{isPending}</h1>}
{error&&<h1 className='text-white text-[3rem]'>{error}</h1>}

        {
            data&& <div className='hh
            lg:mt-[10%]
            md:mt-[20%]
            z-50 mt-[40%] '>

<motion.embed   initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
    
  }} 
  


  
  type="video/webm" src={data.result[0].embed} className={'lg:w-[500px] lg:h-[400px] md:w-[600px] md:h-[600px]  w-[350px] h-[450px]'}/>
            </div>
        }
      
     
    </div>
  )
}



export default Trailar

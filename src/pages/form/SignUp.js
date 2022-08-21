import React from 'react'
import { signInWithGoogle } from '../../components/firebase/Database'
const SignUp = () => {
  return (
    <div className=''>
      <div className='  flex py-[5%] px-[10%]'>
              {/* left */}
              <div className='bg-[black] w-full
              rounded-l-md'>
fldfskj
        </div >
        {/* right */}
        <div className='bg-[#fff] 
        shadow-md
        rounded-r-md
        text-center p-10 w-full overflow-hidden'>
<h2 className='text-center mb-8 font-bold pb-12'>Create an account</h2>
<form action="" className='flex flex-col gap-10
'>
  {/* name */}
 <div className='flex gap-14  '>   <label className='py-2 opacity-90'>Full Name</label>
    <input type="text" placeholder='Full Name' className='
    shadow-sm p-2  bg-slate-50 placeholder-gray-400 placeholder-opacity-50'  onChange={''} required/></div>
    {/* email */}
 <div className='flex opacity-90 gap-9 -m-2  '>   <label className='py-2'>Email Address</label>
    <input className='
    shadow-sm p-2 bg-slate-50 placeholder-gray-400 placeholder-opacity-50'  type="text" placeholder='Email Address' onChange={''} required/></div>
    {/* Password */}
    <div className='flex gap-12 '><label className='opacity-90 p-2' >Password</label>
    <input className='
    shadow-sm p-2 bg-slate-50 placeholder-gray-400 placeholder-opacity-50'  type="text" placeholder='Password' onChange={''} required/></div>
<div className='flex gap-3 -ml-7'>
<label className='opacity-90 p-2  '>comfirm Password</label>
    <input className='
    shadow-sm p-2 bg-slate-50 placeholder-gray-400 placeholder-opacity-50'  type="text" placeholder='Confirm Password' onChange={''} required/>
</div>
   
   <div className='text-left -ml-4'> <label className='opacity-90 ' >
    <input className='
    
    shadow-sm p-2 bg-slate-50 placeholder-gray-400 placeholder-opacity-50'  type="checkbox" required />
  <span> </span> I Agree All statments In Term Of servise 
    </label></div>
    <button className='bg-[#111827] w-fit p-4 rounded-full text-[#ffff]'>Create an account</button>

    <div className='flex justify-center align-middle'>
                <div className='border-b-2 -translate-y-6 w-[80%]'></div>


                <p className=' p-3 border rounded-[50%]'>or</p>

                <div className='border-b-2 -translate-y-6  w-[80%]'></div>
                </div>
              <button onClick={signInWithGoogle}>Sign Up with google</button>

           <p>   I'm already a member! <span>Sign In</span></p>
    
</form>

        </div >
  
      </div>
    </div>
  )
}

export default SignUp

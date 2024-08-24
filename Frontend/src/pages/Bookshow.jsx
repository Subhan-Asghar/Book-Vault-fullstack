import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
const Bookshow = () => {
  const [data, setdata] = useState([])
  const {id}=useParams();
  useEffect(() => {
    try{
      axios.get(`http://localhost:3000/book/${id}`)
      .then((res)=>{
        setdata(res.data.data)
        console.log(res.data.data)
      })
    }catch(err){
      console.log("Error",err)
    }
   
  }, [id])
  
  return (
    <>
      <div className='bg-gradient-to-r from-emerald-600 to-emerald-800 h-24 flex justify-center items-center shadow-lg'>
        <h3 className='text-gold-100 font-bold text-4xl tracking-wider' style={{ fontFamily: "'Merriweather', serif" }}>Book Vault</h3>
      </div>

      <div className='flex flex-col items-center mt-10'>
  <div className='w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 border border-emerald-300'>
    <h4 className='text-emerald-700 font-semibold text-3xl mb-8' style={{ fontFamily: "'Merriweather', serif" }}>
      Book Details
    </h4>
    <div className='space-y-6'>
      <div className='border-b border-emerald-200 pb-4'>
        <div className='flex items-center mb-4'>
          <span className='text-emerald-700 font-medium text-lg w-24'>Title:</span>
          <span className='text-emerald-900 font-medium text-lg pl-4' style={{ fontFamily: "'Georgia', serif" }}>
            {data.title}
          </span>
        </div>
        <div className='flex items-center mb-4'>
          <span className='text-emerald-700 font-medium text-lg w-24'>Author:</span>
          <span className='text-emerald-900 font-medium text-lg pl-4' style={{ fontFamily: "'Georgia', serif" }}>
            {data.author}
          </span>
        </div>
        <div className='flex items-center mb-4'>
          <span className='text-emerald-700 font-medium text-lg w-24'>Year:</span>
          <span className='text-emerald-900 font-medium text-lg pl-4' style={{ fontFamily: "'Georgia', serif" }}>
            {data.year}
          </span>
        </div>
        <div className='flex flex-col'>
          <span className='text-emerald-700 font-medium text-lg'>Description:</span>
          <p className='text-emerald-900 font-medium text-lg pt-2 pl-1' style={{ fontFamily: "'Georgia', serif" }}>
            "{data.description}"
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Bookshow
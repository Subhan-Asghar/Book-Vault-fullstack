import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Bookdelete = () => {
  const {id}=useParams()
  useEffect(() => {
    axios.delete(`http://localhost:3000/book/${id}`)
    .then((res)=>{
      console.log("done")
    })
    
  
  
  }, [])
  
  return (
    <>
    <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 h-24 flex justify-center items-center shadow-lg">
      <h3
        className="text-gold-100 font-bold text-4xl tracking-wider"
        style={{ fontFamily: "'Merriweather', serif" }}
      >
        Book Vault
      </h3>
    </div>

    <div className='flex justify-center items-center bg-offwhite-100 py-10'>
        <div className='text-center max-w-lg p-6 border border-emerald-500 rounded-lg shadow-lg bg-white'>
          <h3 className='text-emerald-800 font-semibold text-3xl mb-4' style={{ fontFamily: "'Merriweather', serif" }}>“Book deleted successfully!”</h3>
          
        </div>
      </div>
    </>
  )
}

export default Bookdelete
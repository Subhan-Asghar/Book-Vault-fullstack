import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [data,setdata]=useState([])
  useEffect(() => {
    try{
      axios.get('http://localhost:3000/book')
      .then((res)=>{
        setdata(res.data.data)
      })
    }catch(err){
      console.log("Error",err)
    }
   
    
    
  }, [])
  

  return (
    <>
      {/* Header Section */}
      <div className='bg-gradient-to-r from-emerald-600 to-emerald-800 h-24 flex justify-center items-center shadow-lg'>
        <h3 className='text-gold-100 font-bold text-4xl tracking-wider' style={{ fontFamily: "'Merriweather', serif" }}>Book Vault</h3>
      </div>

      {/* Welcome Message */}
      <div className='flex justify-center items-center bg-offwhite-100 py-10'>
        <div className='text-center max-w-lg p-6 border border-emerald-500 rounded-lg shadow-lg bg-white'>
          <h3 className='text-emerald-800 font-semibold text-3xl mb-4' style={{ fontFamily: "'Merriweather', serif" }}>Welcome to Your Personal Library</h3>
          <p className='text-emerald-700 text-lg' style={{ fontFamily: "'Georgia', serif" }}>
            Curate, organize, and cherish your favorite books in one luxurious collection. Begin your literary journey today!
          </p>
        </div>
      </div>

      {/* Add Book Button */}
      <div className='flex justify-center mt-6'>
        <Link to='/create' className='bg-emerald-700 hover:bg-emerald-900 text-gold-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300' style={{ fontFamily: "'Merriweather', serif" }}>
          Add a New Book
        </Link>
      </div>

      {/* Book List Placeholder */}
      <div className='flex flex-col items-center mt-10'>
        <div className='w-4/5 lg:w-2/3 bg-white rounded-lg shadow-lg p-8 border border-emerald-300'>
          <h4 className='text-emerald-700 font-semibold text-2xl mb-6' style={{ fontFamily: "'Merriweather', serif" }}>Your Bookshelf</h4>
          { data.map((data)=>(
          <div className='space-y-6'>
            <div className='flex justify-between items-center border-b border-emerald-200 pb-4 mt-6'>
              <span className='text-emerald-900 font-medium text-lg' style={{ fontFamily: "'Georgia', serif" }}>{data.title}</span>
              <div>
              <Link to={`/book/${data._id}`}  className='text-gold-200 hover:text-gold-300 font-medium mr-4'>View</Link>
                <Link to={`/update/${data._id}`}  className='text-emerald-600 hover:text-emerald-800 font-medium mr-4'>Update</Link>
                <Link to={`/delete/${data._id}`}  className='text-red-600 hover:text-red-800 font-medium'>Delete</Link>
              </div>
            </div>
           
            
          </div>
))}
        </div>
      </div>
    </>
  );
}

export default Home;

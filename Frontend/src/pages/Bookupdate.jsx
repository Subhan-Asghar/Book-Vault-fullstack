import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'

const Bookupdate = () => {
  const [title, settitle] = useState('')
  const [author, setauthor] = useState('')
  const [year, setyear] = useState('')
  const [description, setdescription] = useState('')
  const {id}=useParams()

  const addbook=()=>{
    const data={
      title,
      author,
      year,
      description
    }
      axios.put(`http://localhost:3000/book/${id}`,data)
      .then((res)=>{
        console.log(res)
      })
    
     
    }
  
  


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

      <div className="flex flex-col items-center mt-10">
  <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8 border border-emerald-300">
    <h4
      className="text-emerald-700 font-semibold text-2xl mb-8 text-center"
      style={{ fontFamily: "'Merriweather', serif" }}
    >
      Update Book
    </h4>
    <form className="space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <label
            htmlFor="title"
            className="text-emerald-700 font-medium text-lg w-24"
          >
            Title:
          </label>
          <input
            id="title"
            type="text"
            className="border border-emerald-300 rounded-lg p-3 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300 w-full"
            placeholder="Enter book title"
            required
            onChange={(e)=>{settitle(e.target.value)}}
          />
        </div>
        <div className="flex items-center space-x-4">
          <label
            htmlFor="author"
            className="text-emerald-700 font-medium text-lg w-24"
          >
            Author:
          </label>
          <input
            id="author"
            type="text"
            className="border border-emerald-300 rounded-lg p-3 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300 w-full"
            placeholder="Enter author's name"
            required
            onChange={(e)=>{setauthor(e.target.value)}}
          />
        </div>
        <div className="flex items-center space-x-4">
          <label
            htmlFor="year"
            className="text-emerald-700 font-medium text-lg w-24"
          >
            Year:
          </label>
          <input
            id="year"
            type="date"
            required
            onChange={(e)=>{setyear(e.target.value)}}
            className="border border-emerald-300 rounded-lg p-3 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300 w-full"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-emerald-700 font-medium text-lg mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            rows="4"
            onChange={(e)=>{setdescription(e.target.value)}}
            className="border border-emerald-300 rounded-lg p-3 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300 w-full"
            placeholder="Enter a brief description"
          />
        </div>
        <div className="flex justify-center mt-6">
          <button
          onClick={addbook}
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</div>

    </>
  );
};

export default Bookupdate;

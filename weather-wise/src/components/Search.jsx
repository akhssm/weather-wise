import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ setWeatherDetails }) => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key !== 'Enter') return;

    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: search },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setWeatherDetails(response.data);
    } catch (error) {
      console.error(error);
      setWeatherDetails(null);
    }
  };

  return (
    <div className='search-section'>
      <div className='search-container'>
        
        {/* 🔍 Search Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="2" 
          stroke="white" 
          className="search-icon"
        >
          <path strokeLinecap="round" strokeLinejoin="round" 
            d="M21 21l-5.2-5.2m0 0A7.5 7.5 0 105.2 5.2a7.5 7.5 0 0010.6 10.6z" 
          />
        </svg>

        <input
          type='text'
          placeholder='Search for city or country'
          value={search}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Search;

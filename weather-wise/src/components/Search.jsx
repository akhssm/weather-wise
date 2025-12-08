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

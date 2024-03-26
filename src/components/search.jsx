import React, { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  };

  return (
    <div className='flex justify-center items-center mb-10 font-ubuntu-medium'>
      <input
        type="text"
        placeholder="Search Google" 
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
        className="input w-full max-w-md rounded-md " 
      />
    </div>
  );
}

// <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
import React, { useState, useEffect } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault(); // Prevent default Ctrl+K behavior (like opening bookmarks)
      document.getElementById('searchInput').focus();
    } else if (event.key === 'Enter') {
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        document.getElementById('searchInput').focus();
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);

    return () => {
      document.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, []);

  return (
    <div className='flex justify-center items-center mb-10  font-ubuntu-medium'>
      <input
        id="searchInput"
        type="text"
        placeholder="Search Google" 
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
        className="input w-full max-w-80 sm:max-w-md rounded-md hover:bg-transparent" 
      />
    </div>
  );
}
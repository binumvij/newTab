import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Clock from './components/Clock';
import FavoriteLinksList from './components/FavoriteLinksList';
import SearchBar from './components/search';

const App = () => {
  const favoriteLinks = [
    {
      icon: 'https://img.icons8.com/color/96/google-logo.png',
      link: 'https://www.google.com',
      title: 'Google',
    },
    {
      icon: 'https://img.icons8.com/fluency/96/youtube-play.png',
      link: 'https://www.youtube.com',
      title: 'Youtube',
    },
    {
      icon: 'https://img.icons8.com/color/96/google-drive--v2.png',
      link: 'https://drive.google.com',
      title: 'Drive',
    },
    {
      icon: 'https://img.icons8.com/fluency/96/gmail-new.png',
      link: 'https://mail.google.com/mail/u/0/#inbox',
      title: 'Gmail',
    },
    {
      icon: 'https://img.icons8.com/color/96/google-keep.png',
      link: 'https://keep.google.com/',
      title: 'Keep',
    },
    {
      icon: 'https://img.icons8.com/fluency/48/youtube-music.png',
      link: 'https://music.youtube.com/',
      title: 'YT Music',
    },
    {
      icon: 'https://img.icons8.com/color/144/amazon.png',
      link: 'https://www.amazon.in/',
      title: 'Amazon',
    },




    // {
    //   icon: '',
    //   link: '',
    //   title: '',
    // },
  ];

  return (
    <BrowserRouter>
      <>
        <Clock />
        <SearchBar />
        <FavoriteLinksList links={favoriteLinks} />
        
      </>
    </BrowserRouter>
  );
};

export default App;
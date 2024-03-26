import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteLink = ({ icon, link, title }) => {
  return (
    <Link to={link} title={title}>
      <div className="avatar mx-4 md:mx-8 pointer-events-auto">
        <div className="w-10 rounded-full">
        <img src={icon} alt={title} />
        </div>
      </div>
    </Link>
  );
};

const FavoriteLinksList = ({ links }) => {
  return (
    <>
    <div className="favorite-links-list flex justify-center items-center">
      {links.map((link, index) => (
        <FavoriteLink
          key={index}
          icon={link.icon}
          link={link.link}
          title={link.title}
        />
      ))}
    </div>
    </>
  );
};

export default FavoriteLinksList;
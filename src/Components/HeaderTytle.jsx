import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const HeaderTytle = ({ title }) => {
  useEffect(() => {
    document.title = `TestHalal - ${title}`;
    return () => {
      document.title = 'TestHalal'; 
    };
  }, [title]);

  return null;
};

export default HeaderTytle;

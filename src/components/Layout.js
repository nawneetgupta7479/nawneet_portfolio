
import React from 'react';

// Destructure `children` and `className` from `props`
const Layout = ({ children, className = "" }) => {
  return (
    <div className={` w-full h-full inline-block bg-light dark:bg-dark    ${className}`}>
      {children}
    </div>
  );
};

export default Layout;

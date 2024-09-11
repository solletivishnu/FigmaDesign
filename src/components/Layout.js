import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block md:w-1/2 bg-gray-300"></div>
      <div className="w-full md:w-1/2 bg-gray-100 p-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;

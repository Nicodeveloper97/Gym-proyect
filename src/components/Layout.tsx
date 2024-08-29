import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-center bg-gray-900 text-white min-h-screen">
      {children}
    </div>
  );
};

export default Layout;

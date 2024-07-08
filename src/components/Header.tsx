import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Oi, <span className="font-normal">Davi</span></h1>
      <i className="fas fa-eye"></i>
    </header>
  );
};

export default Header;
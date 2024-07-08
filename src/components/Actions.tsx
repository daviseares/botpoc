import React from 'react';

const Actions: React.FC = () => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">AÇÕES</h2>
      <div className="flex flex-col mt-2">
        <button className="flex items-center justify-between p-4 bg-gray-100 rounded-lg mb-2">
          <div className="flex items-center">
            <i className="fas fa-exchange-alt mr-2"></i>
            <span>Transferir saldo entre benefícios</span>
          </div>
          <i className="fas fa-chevron-right"></i>
        </button>
        <button className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
          <div className="flex items-center">
            <i className="fas fa-file-invoice-dollar mr-2"></i>
            <span>Pagar boleto</span>
          </div>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Actions;
import React from 'react';

const Transactions: React.FC = () => {
  const a = 'a'
  const b = 'b'
  console.log(a == b)
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">ÚLTIMAS TRANSAÇÕES</h2>
      <div className="flex flex-col mt-2">
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg mb-2">
          <div>
            <p>PADARIA BIRUTA ALEGRE</p>
            <p className="text-sm text-gray-500">26/05/2022 - 16:30</p>
          </div>
          <p className="font-bold">- R$ 10,00</p>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
          <div>
            <p>PAG*SUELIMEIRALEANDRO</p>
            <p className="text-sm text-gray-500">24/05/2022 - 12:03</p>
          </div>
          <p className="font-bold">- R$ 12,00</p>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
import React from 'react';
import Header from './components/Header';
import BenefitCard from './components/BenefitCard';
import Actions from './components/Actions';
import Transactions from './components/Transactions';

const App: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <Header />
      <div className="grid grid-cols-3 gap-4 mt-4">
        <BenefitCard color="bg-blue-500 text-white" amount="0,00" label="HOME OFFICE" icon="fa-home" />
        <BenefitCard color="bg-orange-500 text-white" amount="146,50" label="ALIMENTAÇÃO" icon="fa-utensils" />
        <BenefitCard color="bg-yellow-500 text-white" amount="0,00" label="MOBILIDADE" icon="fa-bus" />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">Total em benefícios</h2>
        <p className="text-2xl font-bold">R$ 146,50</p>
        <p className="text-sm text-gray-500">Valor flexível</p>
        <p className="text-2xl font-bold">R$ 146,50</p>
      </div>
      <Actions />
      <Transactions />
      <footer className="flex justify-around mt-4">
        <i className="fas fa-home text-blue-500"></i>
        <i className="fas fa-credit-card"></i>
        <i className="fas fa-user"></i>
      </footer>
    </div>
  );
};

export default App;
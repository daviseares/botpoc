import React from 'react';

interface BenefitCardProps {
  color: string;
  amount: any;
  label: string;
  icon: string;
}

const BenefitCard: React.FC<any> = ({ color, amount, label, icon }) => {
  return (
    <div className={`flex flex-col items-center p-4 rounded-lg ${color}`}>
      <i className={`fas ${icon} text-2xl mb-2`}></i>
      <p className="text-lg">R$</p>
      <p className="text-2xl font-bold">{amount}</p>
      <p className="mt-2">{label}</p>
    </div>
  );
};

export default BenefitCard;
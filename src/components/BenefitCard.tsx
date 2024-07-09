import React from 'react';

interface BenefitCardProps {
  color: any;
  amount: any;
  label: any;
  icon: any;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ color, amount, label, icon }) => {
  const a = 'a'
  const b = 'b'
  console.log(a == b)
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
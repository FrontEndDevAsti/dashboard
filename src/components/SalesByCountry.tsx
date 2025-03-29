import React from 'react';

const countries = [
  { 
    name: 'United States', 
    sales: 2500, 
    bounce: '29.9%', 
    flag: 'https://flagcdn.com/w40/us.png'
  },
  { 
    name: 'Germany', 
    sales: 3900, 
    bounce: '40.22%', 
    flag: 'https://flagcdn.com/w40/de.png'
  },
  { 
    name: 'Great Britain', 
    sales: 1400, 
    bounce: '23.44%', 
    flag: 'https://flagcdn.com/w40/gb.png'
  },
  { 
    name: 'Brasil', 
    sales: 562, 
    bounce: '32.14%', 
    flag: 'https://flagcdn.com/w40/br.png'
  },
  { 
    name: 'Australia', 
    sales: 400, 
    bounce: '56.83%', 
    flag: 'https://flagcdn.com/w40/au.png'
  }
];

const SalesByCountry = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Sales by Country</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-4">Country</th>
              <th className="pb-4">Sales</th>
              <th className="pb-4">Bounce</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <tr key={country.name} className="border-t border-gray-100">
                <td className="py-4">
                  <div className="flex items-center space-x-2">
                    <img 
                      src={country.flag} 
                      alt={`${country.name} flag`} 
                      className="w-6 h-4 object-cover rounded"
                    />
                    <span>{country.name}</span>
                  </div>
                </td>
                <td className="py-4">{country.sales}</td>
                <td className="py-4">{country.bounce}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesByCountry;
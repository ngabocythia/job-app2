'use client'

import React, { useState } from 'react';

export default function CanteenManagementPage() {
  // Sample inventory
  const [inventory, setInventory] = useState([
    { id: 1, item: 'Rice (kg)', quantity: 50 },
    { id: 2, item: 'Beans (kg)', quantity: 30 },
    { id: 3, item: 'Oil (liters)', quantity: 20 },
    { id: 4, item: 'Tomatoes (kg)', quantity: 15 },
  ]);

  // Sample requests
  const [requests, setRequests] = useState([
    { id: 1, department: 'Kitchen', item: 'Rice', amount: 5 },
    { id: 2, department: 'Bakery', item: 'Beans', amount: 2 },
  ]);

  // Meals served
  const [mealsServed, setMealsServed] = useState(120);

  // Financial data
  const incomeStatement = [
    { label: 'Meals Revenue', amount: 3000 },
    { label: 'Beverage Revenue', amount: 800 },
    { label: 'Other Income', amount: 200 },
    { label: 'Total Revenue', amount: 4000, isTotal: true },
    { label: 'Food Cost', amount: 1500 },
    { label: 'Labor Expense', amount: 600 },
    { label: 'Utilities', amount: 300 },
    { label: 'Other Operating Expenses', amount: 200 },
    { label: 'Total Expenses', amount: 2600, isTotal: true },
    { label: 'Net Operating Income', amount: 1400, isTotal: true },
  ];

  const balanceSheet = {
    assets: [
      { label: 'Cash', amount: 2000 },
      { label: 'Inventory', amount: 800 },
      { label: 'Prepaid Expenses', amount: 200 },
      { label: 'Total Assets', amount: 3000, isTotal: true },
    ],
    liabilities: [
      { label: 'Accounts Payable', amount: 500 },
      { label: 'Short-Term Loans', amount: 700 },
      { label: 'Total Liabilities', amount: 1200, isTotal: true },
    ],
    equity: [
      { label: "Owner's Equity", amount: 1800 },
      { label: 'Total Liabilities & Equity', amount: 3000, isTotal: true },
    ],
  };

  const cashFlow = [
    { label: 'Net Income', amount: 1400 },
    { label: 'Depreciation', amount: 100 },
    { label: 'Change in Inventory', amount: -100 },
    { label: 'Net Cash from Ops', amount: 1400, isTotal: true },
    { label: 'CapEx', amount: -500 },
    { label: 'Loan Payments', amount: -200 },
    { label: 'Net Cash from Financing', amount: -200, isTotal: false },
    { label: 'Net Change in Cash', amount: 700, isTotal: true },
  ];

  const handleAddRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const dept = form.department.value;
    const item = form.item.value;
    const amount = parseInt(form.amount.value, 10);
    setRequests([...requests, { id: Date.now(), department: dept, item, amount }]);
    form.reset();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Canteen Management Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Inventory Section */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Stock Inventory</h2>
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Item</th>
                <th className="text-right p-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map(i => (
                <tr key={i.id} className="hover:bg-gray-50">
                  <td className="p-2">{i.item}</td>
                  <td className="p-2 text-right">{i.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Requests Section */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Kitchen Requests</h2>
          <ul className="space-y-2 mb-4">
            {requests.map(r => (
              <li key={r.id} className="flex justify-between p-2 bg-gray-50 rounded">
                <span>{r.department}: {r.amount} x {r.item}</span>
              </li>
            ))}
          </ul>
          <form onSubmit={handleAddRequest} className="space-y-2">
            <div className="flex space-x-2">
              <input name="department" placeholder="Department" className="flex-1 p-2 border rounded" required />
              <input name="item" placeholder="Item" className="flex-1 p-2 border rounded" required />
              <input name="amount" type="number" placeholder="Qty" className="w-20 p-2 border rounded" required />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-2xl shadow hover:bg-blue-600">
              Add Request
            </button>
          </form>
        </div>

        {/* Meals Served Section */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Meals Served</h2>
          <p className="text-4xl font-bold">{mealsServed}</p>
        </div>

        {/* Financial Overview Section */}
        <div className="bg-white rounded-2xl shadow p-4 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Financial Overview</h2>

          {/* Income Statement */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Income Statement</h3>
            <table className="w-full table-auto">
              <tbody>
                {incomeStatement.map((row, idx) => (
                  <tr key={idx} className={row.isTotal ? 'font-bold border-t' : ''}>
                    <td className="p-2">{row.label}</td>
                    <td className="p-2 text-right">${row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Balance Sheet */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {['assets', 'liabilities', 'equity'].map((section) => (
              <div key={section}>
                <h3 className="font-semibold mb-2 capitalize">{section}</h3>
                <table className="w-full table-auto">
                  <tbody>
                    {balanceSheet[section].map((row, idx) => (
                      <tr key={idx} className={row.isTotal ? 'font-bold border-t' : ''}>
                        <td className="p-2">{row.label}</td>
                        <td className="p-2 text-right">${row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {/* Cash Flow Statement */}
          <div>
            <h3 className="font-semibold mb-2">Cash Flow Statement</h3>
            <table className="w-full table-auto">
              <tbody>
                {cashFlow.map((row, idx) => (
                  <tr key={idx} className={row.isTotal ? 'font-bold border-t' : ''}>
                    <td className="p-2">{row.label}</td>
                    <td className="p-2 text-right">${row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

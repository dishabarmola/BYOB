import React, { useState, useEffect } from 'react';
import { Typography, Button } from "@material-tailwind/react";

const Dashboard = () => {
  const [businessData, setBusinessData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('businessData');
    if (data) {
      setBusinessData(JSON.parse(data));
    }
  }, []);

  const clearDashboardData = () => {
    // Clear state data related to the dashboard
    setBusinessData(null);
    // Clear data from local storage
    localStorage.removeItem('businessData');
  };

  if (!businessData) {
    return (
      <div className="flex flex-col items-center justify-center bg-white py-24 px-4">
        <h1 className="text-5xl font-bold text-center mb-8">
          My <span className="text-red-500">Dashboard</span>
        </h1>
        <p>No data available.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white py-24 px-4">
      <h1 className="text-5xl font-bold text-center mb-8">
        My <span className="text-red-500">Dashboard</span>
      </h1>
      <Button onClick={clearDashboardData} className="mb-4 bg-red-500 text-white hover:bg-red-600">
        Clear Dashboard Data
      </Button>
      <div className="mx-auto max-w-5xl p-8 rounded-2xl border border-gray-200 shadow-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Field</th>
              <th className="py-2 px-4 border-b">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Business Name</td>
              <td className="py-2 px-4 border-b">{businessData.businessName}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Owner Name</td>
              <td className="py-2 px-4 border-b">{businessData.ownerName}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Contact Number</td>
              <td className="py-2 px-4 border-b">{businessData.contactNumber}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Location</td>
              <td className="py-2 px-4 border-b">{businessData.location}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Service Type</td>
              <td className="py-2 px-4 border-b">{businessData.serviceType}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Service Details</td>
              <td className="py-2 px-4 border-b">{businessData.serviceDetails}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

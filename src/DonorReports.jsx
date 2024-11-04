import React from 'react';
import './DonorReports.css';

const DonorReports = () => {
  const reportData = [
    { id: 1, foodType: 'Canned Beans', totalQuantity: 100, donors: 5 },
    { id: 2, foodType: 'Bread', totalQuantity: 50, donors: 3 },
  ];

  return (
    <div className="donor-reports-container">
      <h2>Donor Reports</h2>
      <table className="reports-table">
        <thead>
          <tr>
            <th>Food Type</th>
            <th>Total Quantity</th>
            <th>Total Donors</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((report) => (
            <tr key={report.id}>
              <td>{report.foodType}</td>
              <td>{report.totalQuantity}</td>
              <td>{report.donors}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonorReports;
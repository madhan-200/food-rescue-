import React, { useState } from 'react';
import './VolunteerReport.css';

const VolunteerReport = () => {
  const [volunteers, setVolunteers] = useState([
    { name: 'Madhankumar', tasksCompleted: 5, hoursWorked: 8 },
    { name: 'Jayatchana Aravind', tasksCompleted: 4, hoursWorked: 10 },
    { name: 'Manikandan', tasksCompleted: 3, hoursWorked: 11 },
  ]);

  return (
    <div className="volunteer-report-container">
      <h2>Volunteer Report</h2>
      <table className="volunteer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Tasks Completed</th>
            <th>Hours Worked</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer, index) => (
            <tr key={index}>
              <td>{volunteer.name}</td>
              <td>{volunteer.tasksCompleted}</td>
              <td>{volunteer.hoursWorked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VolunteerReport;

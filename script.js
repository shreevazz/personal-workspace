import React, { useState } from 'react';

const PerformanceReport = () => {
  // Sample data for performance report
  const performanceData = [
    { subject: 'Math', marks: 90 },
    { subject: 'Science', marks: 80 },
    { subject: 'History', marks: 95 },
    // Add more subjects as needed
  ];

  // Function to calculate total marks
  const calculateTotalMarks = () => {
    return performanceData.reduce((total, subject) => total + subject.marks, 0);
  };

  // Function to calculate average marks
  const calculateAverageMarks = () => {
    const totalMarks = calculateTotalMarks();
    return totalMarks / performanceData.length;
  };

  // Function to classify grades based on average marks
  const classifyGrades = () => {
    const averageMarks = calculateAverageMarks();

    if (averageMarks >= 90) {
      return 'A';
    } else if (averageMarks >= 80) {
      return 'B';
    } else if (averageMarks >= 70) {
      return 'C';
    } else if (averageMarks >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  };

  return (
    <div>
      <h2>Annual Performance Report</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {performanceData.map((subject, index) => (
            <tr key={index}>
              <td>{subject.subject}</td>
              <td>{subject.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <strong>Total Marks:</strong> {calculateTotalMarks()}
      </div>
      <div>
        <strong>Average Marks:</strong> {calculateAverageMarks().toFixed(2)}
      </div>
      <div>
        <strong>Grade:</strong> {classifyGrades()}
      </div>
    </div>
  );
};

export default PerformanceReport;

"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'src/styles/pdf.css';

import {
  faClipboardUser,
  faReceipt,
  faQuestionCircle,
  faAddressCard,
  faRightFromBracket,
  faFileDownload,
} from '@fortawesome/free-solid-svg-icons';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import 'src/styles/pdf.css';

// Define a style for the cursor
const cursorToPointer = {
  cursor: 'pointer',
};




const PDFGenerator = () => {
  // Function to generate and save a PDF
  const generatePDF = async () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'in',
      format: [9.3, 11],
    });
  
  
  
    const contentElement = document.getElementById('content');

    if (contentElement) {
      // Use html2canvas to convert HTML to an image
      const canvas = await html2canvas(contentElement);
  
      // Convert the canvas to a data URL
      const imageData = canvas.toDataURL('image/png');
  
      // Calculate the center position
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const imageWidth = pageWidth; // Set the width of the image to match the page width
      const imageHeight = (canvas.height * imageWidth) / canvas.width; // Maintain aspect ratio
  
      // Add the image to the PDF with the calculated center position
      doc.addImage(imageData, 'PNG', -0.4, 0.1, imageWidth, imageHeight); // x, y
  
      // Save the PDF
      doc.save('Payslip.pdf');
    } else {
      
    }
 
  };
  

  return (

    <body>
    <div>
      {/* Sidebar */}
      <div className="Sidebar">
        <header className="head"></header>

        <ul>
          <li>
            <a href="#" className="logo">
              <img src="logo.jpg" alt="" />
              <span className="nav-e">Employee</span>
            </a>
          </li>

          {/* Navigation links */}
          <li>
            <a href="/dashboard">
              <FontAwesomeIcon icon={faClipboardUser} className="fas" />
              <span className="nav-item">Attendance</span>
            </a>
          </li>

          <li>
            <a href="/payslip">
              <FontAwesomeIcon icon={faReceipt} className="fas" />
              <span className="nav-item">Payslip</span>
            </a>
          </li>

          <li>
            <a href="/201files">
              <FontAwesomeIcon icon={faQuestionCircle} className="fas" />
              <span className="nav-item">201 files</span>
            </a>
          </li>

          {/* Download Payslip button */}
          <li>
            <a onClick={generatePDF} style={cursorToPointer}>
              <FontAwesomeIcon icon={faFileDownload} className="fas" />
              <span className="nav-item">Download </span>
            </a>
          </li>

          <li>
            <a href="/aboutme">
              <FontAwesomeIcon icon={faAddressCard} className="fas" />
              <span className="nav-item">About Me</span>
            </a>
          </li>

          <li>
            <a href="/logins" className="logout">
              <FontAwesomeIcon icon={faRightFromBracket} className="fas" />
              <span className="nav-item">Log-Out</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="center-wrapper">
        <div className="payslip-wrapper">
          <div id="content">
            <div className="payslip-container">
              <div className="header">
                <h1>P a y s l i p</h1>
              </div>

              <div className="company-name">WB MAJESTY</div>

              {/* Employee information */}
              <div className="employee-info">
                <p>Employee Information</p>
                <div className="info-row">
                  <span className="label">Employee Name:</span>
                  <span className="value"></span>
                </div>
                <div className="info-row">
                  <span className="label">Employee ID:</span>
                  <span className="value"></span>
                </div>

                <div className="info-row">
                  <span className="label">Position:</span>
                  <span className="value"></span>
                </div>
                <div className="info-row">
                  <span className="label">Period Covered:</span>
                  <span className="value"></span>
                </div>
              </div>

              {/* Taxable income */}
              <div className="earnings">
                <h3 className="section-title">Taxable Income</h3>

                <div className="earning-row">
                  <span className="label">Basic Salary:</span>
                  <span className="value"></span>
                </div>
                <div className="earning-row">
                  <span className="label">Overtime:</span>
                  <span className="value"></span>
                </div>
                <div className="earning-row">
                  <span className="label">Gross Earnings:</span>
                  <span className="value"></span>
                </div>
              </div>

              {/* Deductions */}
              <div className="deductions">
                <h3 className="section-title">Deductions</h3>

                <div className="deduction-row">
                  <span className="label">Tax:</span>
                  <span className="value"></span>
                </div>

                <div className="deduction-row">
                  <span className="label">Pag-Ibig:</span>
                  <span className="value"></span>
                </div>

                <div className="deduction-row">
                  <span className="label">PhilHealth:</span>
                  <span className="value"></span>
                </div>

                <div className="deduction-row">
                  <span className="label">SSS:</span>
                  <span className="value"></span>
                </div>
                <div className="deduction-row">
                  <span className="label">Total Contribution:</span>
                  <span className="value"></span>
                </div>
              </div>

              {/* Net Pay */}
              <div className="total">
                <span className="label">Net Pay:</span>
                <span className="value"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
  );
};

export default PDFGenerator;

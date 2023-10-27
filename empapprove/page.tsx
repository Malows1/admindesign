"use client";
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faUserPlus,
  faFile,
  faRightFromBracket,
  faSearch,
  faReceipt
} from '@fortawesome/free-solid-svg-icons';

import 'src/app/adminstyles/approve.css';

const AddEmp = () => {
  return (
    <div>
      <div className="Sidebar">
        <header className="head"></header>

        <ul>
          <li>
            <a href="#" className="logo">
              <img src="logo.jpg" alt="" />
            </a>
          </li>

          <li>
            <a href="/admin">
              <FontAwesomeIcon icon={faChartLine} className="fas" />
              <span className="nav-item">Attendance</span>
            </a>
          </li>

          <li>
            <a href="/empadd">
              <FontAwesomeIcon icon={faUserPlus} className="fas" />
              <span className="nav-item">Add Employee</span>
            </a>
          </li>
          <li>
            <a href="/searchemployee" >
              <FontAwesomeIcon icon={faSearch} className="fas" />
              <span className="nav-item">Employee Info</span>
            </a>
          </li>

          <li>
            <a href="/empapprove">
              <FontAwesomeIcon icon={faFile} className="fas" />
              <span className="nav-item">Request</span>
            </a>
          </li>
          <li>
                        <a href="/payslip">
                            <FontAwesomeIcon icon={faReceipt} className="fas" />
                            <span className="nav-item">Payslip</span>
                        </a>
                    </li>

          <li>
            <a href="Login.html" className="logout">
              <FontAwesomeIcon icon={faRightFromBracket} className="fas" />
              <span className="nav-item">Log-Out</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="container">
        <h1>Approval Requests</h1>
        <table id="clickable-table">
          <thead>
            <tr>
              <th>Requester Name</th>
              <th>Request Description</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {/* You can add your table data here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddEmp;

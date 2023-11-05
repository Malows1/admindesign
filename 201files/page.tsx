"use client";
import React, {useRef}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'src/styles/files.css';
import {
    faClipboardUser,
    faReceipt,
    faQuestionCircle,
    faAddressCard,
    faRightFromBracket,
    faCancel,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';


const file = () => {

    const fileInputRef = useRef(null);

    const chooseFile = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // Handle the selected file here
            console.log('Selected file:', selectedFile);
        }
    };
    return (
        <div>
            <div className="Sidebar">
                <header className="head"></header>

                <ul>
                    <li>
                        <a href="#" className="logo">
                            <img src="logo.jpg" alt="" />
                            <span className="nav-e">Employee</span>
                        </a>
                    </li>

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
            <div className="table-container">
            <div className="outer">
                <div className="tables">
                    <table>
                        <thead>
                            <tr>
                                <th>INFORMATION</th>
                                <th className="requested">REQUESTED</th>
                                <th className="current">CURRENT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="row">
                                <td>Employee No.</td>
                                <td><input type="text" name="employeeNo" id="employeeNo" /></td>
                                <td></td>
                            </tr>
                            <tr className="row">
                                <td>Hired Date</td>
                                <td><input type="date" id="dateInputRow2" className="date-input" /></td>
                                <td></td>
                            </tr>
                            <tr className="row">
                                <td>Pag-Ibig No.</td>
                                <td><input type="text" /></td>
                                <td></td>
                            </tr>
                            <tr className="row">
                                <td>Philhealth</td>
                                <td><input type="text"/></td>
                                <td></td>
                            </tr> 
                            <tr className="row">
                                <td>Tin No</td>
                                <td><input type="text"/></td>
                                <td></td>
                            </tr>
                            <tr className="row">
                                <td>SSS No.</td>
                                <td><input type="text"/></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Note</p>
                        <p className="hint">A brief information for requesting 201 file change</p>

                        <div className="note">
                            <textarea id="noteText" placeholder="Enter your note text here..."></textarea>
                         
                        </div>

                        <p>Attachment</p>
                        <div>
            <div className="file-form">
                <input
                    type="file"
                    id="fileInput"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <button onClick={chooseFile}>Choose File</button>
             
            </div>
            <div className="new-btn">
            <button className="btn-save"> <FontAwesomeIcon icon={faEnvelope} className="fass" />Save & Submit </button>
                <button className="btn-cancel"><FontAwesomeIcon icon={faCancel} className="fass" />Close</button>
                </div>
        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default file;

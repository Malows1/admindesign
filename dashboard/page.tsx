import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'src/styles/style.css';
import {
    faClipboardUser,
    faReceipt,
    faQuestionCircle,
    faAddressCard,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

const atten = () => {
    return (
        <div>
            <div className="Sidebar">
                <header className="head"></header>

                <ul>
                    <li>
                        <a href="#" className="logo">
                            <img src="logo.jpg" alt="" ></img>
                          
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
            <div className="title">
                <h1>ATTENDANCE</h1>
            </div>

            <div className="position">
                <aside>
                    <p className="compname">WB Majesty Marketing Corporation</p>
                </aside>
                <aside>
                    <p> Name: <span></span> </p>
                    <p> Employee ID: </p>
                    <p> Position: </p>
                </aside>
            </div>
            <div className="outer">
                <div className="table-w">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time In</th>
                                <th>Time Out</th>
                            </tr>
                        </thead>
                        <tbody>{/* Add your table rows here */}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default atten;

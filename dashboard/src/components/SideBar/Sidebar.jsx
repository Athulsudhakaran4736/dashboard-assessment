import "./Sidebar.css"
import dashboardLogo from "../../assets/dashboard-logo.svg"
import dashboardIcon from "../../assets/Category.svg";
import invoiceIcon from "../../assets/Ticket.svg";
import scheduleIcon from "../../assets/Document.svg";
import calenderIcon from "../../assets/Calendar.svg";
import notificationIcon from "../../assets/Notification.svg";
import settingIcon from "../../assets/Setting.svg"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mainLayoutVisible, setMainLayoutVisible] = useState(true);
  const handleClick = (item) => {
    setActiveItem(item)
  }
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setMainLayoutVisible(!sidebarOpen);
  };
  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="dashboard-logo">
      {sidebarOpen ? null : (
          <div className="hamburger-icon" onClick={toggleSidebar}>
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: "20px", color: "#333" }}
            />
          </div>
        )}
        <div className="logo-base">
           <img src={dashboardLogo} className="dashboard-logo-image"/>
           <h2>Base</h2>
        </div>   
        {sidebarOpen && (
          <div className="close-icon" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faTimes} style={{ fontSize: "20px", color: "#333" }} />
          </div>
        )}
      </div>
      <ul>
        <li>
          <a className={`sidebar-icon-text ${activeItem === 'dashboard' ? 'active' : ''}`} onClick={() => handleClick("Dashboard")}>
            <img src={dashboardIcon} className="sidebar-icon"/>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a className="sidebar-icon-text.active" onClick={() => handleClick("Upload")}>
            <FontAwesomeIcon icon={faChartSimple} style={{ color: '#605BFF' }} />
            <span className="upload-text" style={{ color: '#605BFF' }}>Upload</span>
          </a>
        </li>
        <li>
          <a className="sidebar-icon-text" onClick={() => handleClick("Invoice")}>
            <img src={invoiceIcon} className="sidebar-icon"/>
            <span>Invoice</span>
          </a>         
        </li>
        <li>
        <a className="sidebar-icon-text" onClick={() => handleClick("Schedule")}>
          <img src={scheduleIcon} className="sidebar-icon"/>
          <span>Schedule</span>
        </a>
        </li>
        <li>
          <a className="sidebar-icon-text" onClick={() => handleClick("Calendar")}>
            <img src={calenderIcon} className="sidebar-icon"/>
            <span>Calendar</span>
          </a>
        </li>
        <li>
          <a className="sidebar-icon-text" onClick={() => handleClick("Notification")}>
            <img src={notificationIcon} className="sidebar-icon"/>
            <span>Notification</span>
          </a>
        </li>
        <li>
          <a className="sidebar-icon-text" onClick={() => handleClick("Settings")}>
            <img src={settingIcon} className="sidebar-icon"/>
            <span>Settings</span>
          </a>  
        </li>   
      </ul>
    </div>
  )
}

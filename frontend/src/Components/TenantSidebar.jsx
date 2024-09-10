import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
function TenantSidebar() {
  return (
    <>
      <nav className="sidebar">
        <div className="logo-div side-logo  text-center mt-4">
          <h3 className=" logo">codeluxe</h3>
        </div>

        <ul className="links">
          <li className="active">
            <Link to="/tenant-dashboard">
              <span className="icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeWidth="2"
                    d="M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"
                  ></path>
                </svg>
              </span>
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li className="">
            <Link to="/lease">
              <span className="icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeWidth="2"
                    d="M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"
                  ></path>
                </svg>
              </span>
              <span className="text">Lease</span>
            </Link>
          </li>

          <li>
            <Link to="/maintenance">
              <span className="icon">
                <span className="icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1"
                    viewBox="0 0 48 48"
                    enableBackground="new 0 0 48 48"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#37474F">
                      <rect x="23" y="5" width="2" height="36"></rect>
                      <rect
                        x="20.5"
                        y="31.4"
                        transform="matrix(.707 .707 -.707 .707 33.523 -3.921)"
                        width="2"
                        height="14.2"
                      ></rect>
                      <rect
                        x="25.5"
                        y="31.4"
                        transform="matrix(-.707 .707 -.707 -.707 72.487 46.995)"
                        width="2"
                        height="14.2"
                      ></rect>
                    </g>
                    <rect
                      x="4"
                      y="8"
                      fill="#CFD8DC"
                      width="40"
                      height="28"
                    ></rect>
                    <g fill="#607D8B">
                      <rect x="3" y="7" width="42" height="4"></rect>
                      <rect x="3" y="35" width="42" height="2"></rect>
                      <circle cx="31.5" cy="43.5" r="1.5"></circle>
                      <circle cx="16.5" cy="43.5" r="1.5"></circle>
                    </g>
                    <g fill="#C51162">
                      <polygon points="31.9,18.9 26,24.9 20,18.9 11.9,26.9 14.1,29.1 20,23.1 26,29.1 34.1,21.1"></polygon>
                      <polygon points="36,24 29,17 36,17"></polygon>
                    </g>
                  </svg>
                </span>
              </span>
              <span className="text">Maintenance</span>
            </Link>
          </li>
          <li>
            <Link to="/payments">
              <span className="icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1.2em"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.5-6H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z"></path>
                  </g>
                </svg>
              </span>
              <span className="text">Payments</span>
            </Link>
          </li>

          <li className="">
            <Link to="/settings">
              <span className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </span>
              <span className="text mt-5">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default TenantSidebar;

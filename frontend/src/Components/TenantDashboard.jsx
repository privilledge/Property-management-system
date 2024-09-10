import SupervisorTopbar from "./SupervisorTopbar";
import TenantSidebar from "./TenantSidebar";

function TenantDashboard() {
  return (
    <>
      <TenantSidebar />

      <div className="main-content">
        <SupervisorTopbar />

        <div
          className="card-group mt-4"
          style={{ borderRadius: "0", border: "none" }}
        >
          <div className="card m-1 card1" style={{}}>
            <div className="card-body">
              <h6 className="card-title">
                <span className="icon">
                  <svg
                    stroke="currentColor"
                    fill="gray"
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
                &nbsp; Lease overview
              </h6>
              <div
                className="card-text lease-overview p-1"
                style={{ backgroundColor: "white" }}
              >
                <ul className="py-3">
                  <li>
                    <div>
                      <span className="fw-bold">Property :</span>
                      <span> Property name</span>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div>
                      <span className="fw-bold">Unit :</span>
                      <span> Unit name</span>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div>
                      <span className="fw-bold">Start date :</span>
                      <span> 23-10-2023</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span className="fw-bold">End date :</span>
                      <span> 26-12-2024</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card  m-1">
            <div className="card-body">
              <h6 className="card-title">
                <span className="icon">
                  <svg
                    stroke="currentColor"
                    fill="gray"
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
                &nbsp; Maintainance Requests Status
              </h6>
              <div className="card-text px-1">
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Request</th>
                      <th scope="col">Status</th>
                      <th scope="col">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>Joina City</td>

                      <td>23-10-2024</td>
                    </tr>
                    <tr>
                      <td>Tom Mayor</td>
                      <td>123 Mainway</td>

                      <td>12-11-2024</td>
                    </tr>
                    <tr>
                      <td>Jane Knox</td>
                      <td>21 Streetwise</td>

                      <td>21-12-2024</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-5 mx-1" style={{ border: "none" }}>
          <div className="card-body">
            <h6 className="card-title">Payment History</h6>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Tenant</th>
                  <th scope="col">Property</th>
                  <th scope="col">Unit/s</th>
                  <th scope="col">Expiration date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Joina City</td>
                  <td>15th floor left wing</td>
                  <td>23-10-2024</td>
                </tr>
                <tr>
                  <td>Tom Mayor</td>
                  <td>123 Mainway</td>
                  <td>Full-house</td>
                  <td>12-11-2024</td>
                </tr>
                <tr>
                  <td>Jane Knox</td>
                  <td>21 Streetwise</td>
                  <td>Office 14</td>
                  <td>21-12-2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default TenantDashboard;

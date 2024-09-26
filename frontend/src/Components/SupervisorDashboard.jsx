import PropertyOccupancyChart from "./PropertyOccupancyChart";
import SupervisorSidebar from "./SupervisorSidebar";
import SupervisorTopbar from "./SupervisorTopbar";

function SupervisorDashboard() {
  return (
    <>
      <SupervisorSidebar />

      <div className="main-content ">
        <SupervisorTopbar />
        <div className="contents">
          <div className=" mx-1 mt-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
              <div className="col">
                <div className="card radius-10 border-start border-0 border-3 border-info">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="mb-0 text-secondary">Total Tenants</p>
                        <h4 className="my-1 text-info">4805</h4>
                        <p className="mb-0 font-13">+2.5% from last week</p>
                      </div>
                      <div className="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
                        <i className="fa fa-shopping-cart"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card radius-10 border-start border-0 border-3 border-danger">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="mb-0 text-secondary">
                          Total Rent Received
                        </p>
                        <h4 className="my-1 text-danger">$84,245</h4>
                        <p className="mb-0 font-13">+5.4% from last week</p>
                      </div>
                      <div className="widgets-icons-2 rounded-circle bg-gradient-bloody text-white ms-auto">
                        <i className="fa fa-dollar"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card radius-10 border-start border-0 border-3 border-success">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="mb-0 text-secondary">
                          Maintenance Requests
                        </p>
                        <h4 className="my-1 text-success">34.6%</h4>
                        <p className="mb-0 font-13">-4.5% from last week</p>
                      </div>
                      <div className="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto">
                        <i className="fa fa-bar-chart"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card radius-10 border-start border-0 border-3 border-warning">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="mb-0 text-secondary">Available units</p>
                        <h4 className="my-1 text-warning">8.4K</h4>
                        <p className="mb-0 font-13">+8.4% from last week</p>
                      </div>
                      <div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto">
                        <i className="fa fa-users"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-1">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-2 mt-4 stats">
              <div className="col">
                <div className="card radius-10 p-0">
                  <div className="card-title">
                    <h6 className="p-2">Property occupancy stats</h6>
                  </div>
                  <div className="card-body m-2">
                    <PropertyOccupancyChart />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card radius-10 p-2">
                  <div className="card-title">
                    <h6>Maintenance Requests received</h6>
                  </div>
                  <div className="card-body m-5">
                    <h4 className="text-center">
                      Wave graph showing request received
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3 mx-1 " style={{ border: "none" }}>
            <div className="card-body">
              <h6 className="card-title">Upcoming Lease Expirations</h6>
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
      </div>
    </>
  );
}

export default SupervisorDashboard;

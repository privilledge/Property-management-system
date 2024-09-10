import SupervisorSidebar from "./SupervisorSidebar";
import SupervisorTopbar from "./SupervisorTopbar";
import { useState } from "react";

import MaintenanceDetails from "./MaintenanceDetails";
import SearchBar from "./Searchbar";
function Maintenance() {
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);

  const viewMantenanceDetails = () => {
    setShowMaintenanceModal(true);
  };
  const handleHideMaintenanceModal = () => {
    setShowMaintenanceModal(false);
  };
  return (
    <>
      <SupervisorSidebar />
      <div className="main-content">
        <SearchBar />
        <div className="properties card mx-2 mt-4">
          <div className="card-title p-3 d-flex">
            <h5 className="mt-1">All Maintenance Request</h5>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Associated Tenant</th>
                  <th scope="col">Request Title </th>
                  <th scope="col">Priority Level</th>
                  <th scope="col">Property</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  onClick={viewMantenanceDetails}
                  style={{ cursor: "pointer" }}
                >
                  <td>John Doe</td>
                  <td>Joina City</td>
                  <td>15th floor left wing</td>
                  <td>23-10-2024</td>
                  <td>23-10-2024</td>
                </tr>
                <tr>
                  <td>Tom Mayor</td>
                  <td>123 Mainway</td>
                  <td>Full-house</td>
                  <td>12-11-2024</td>
                  <td>23-10-2024</td>
                </tr>
                <tr>
                  <td>Jane Knox</td>
                  <td>21 Streetwise</td>
                  <td>Office 14</td>
                  <td>21-12-2024</td>
                  <td>23-10-2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <MaintenanceDetails
          show={showMaintenanceModal}
          onClose={handleHideMaintenanceModal}
        />
      </div>
    </>
  );
}
export default Maintenance;

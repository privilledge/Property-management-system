import AddLease from "./AddLease";
import LeaseDetails from "./LeaseDetails";
import SearchBar from "./Searchbar";
import SupervisorSidebar from "./SupervisorSidebar";
import SupervisorTopbar from "./SupervisorTopbar";
import { useState } from "react";
function Leases() {
  const [showAddModal, setAddShowModal] = useState(false);
  const [showLeaseModal, setShowLeaseModal] = useState(false);
  const handleShowAddModal = () => {
    setAddShowModal(true);
  };
  const handleHideAddModal = () => {
    setAddShowModal(false);
  };
  const viewLeaseDetails = () => {
    setShowLeaseModal(true);
  };
  const handleHideLeaseModal = () => {
    setShowLeaseModal(false);
  };
  return (
    <>
      <SupervisorSidebar />
      <div className="main-content">
        <SearchBar />
        <div className="properties card mx-2 mt-4">
          <div className="card-title p-3 d-flex">
            <h5 className="mt-1">All Leases</h5>
            <button className="btn add-button" onClick={handleShowAddModal}>
              Add lease
            </button>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Tenant</th>
                  <th scope="col">Starting date </th>
                  <th scope="col">End date</th>
                  <th scope="col">Property</th>
                  <th scope="col">Unit/s</th>
                </tr>
              </thead>
              <tbody>
                <tr onClick={viewLeaseDetails} style={{ cursor: "pointer" }}>
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
        <AddLease show={showAddModal} onClose={handleHideAddModal} />
        <LeaseDetails show={showLeaseModal} onClose={handleHideLeaseModal} />
      </div>
    </>
  );
}
export default Leases;

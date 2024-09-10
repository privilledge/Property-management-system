import { useState } from "react";
import SupervisorSidebar from "./SupervisorSidebar";
import SupervisorTopbar from "./SupervisorTopbar";
import AddTenant from "./AddTenant";
import TenantDetails from "./TenantDetails";
import SearchBar from "./Searchbar";
function Tenants() {
  const [showAddModal, setAddShowModal] = useState(false);
  const [showTenantModal, setShowTenantModal] = useState(false);
  const handleShowAddModal = () => {
    setAddShowModal(true);
  };
  const handleHideAddModal = () => {
    setAddShowModal(false);
  };
  const viewTenantDetails = () => {
    setShowTenantModal(true);
  };
  const handleHideTenantModal = () => {
    setShowTenantModal(false);
  };
  return (
    <>
      <SupervisorSidebar />
      <div className="main-content">
        <SearchBar />
        <div className="properties card mx-2 mt-4">
          <div className="card-title p-3 d-flex">
            <h5 className="mt-1">All Tenants</h5>
            <button className="btn add-button" onClick={handleShowAddModal}>
              Add tenant
            </button>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Tenant</th>
                  <th scope="col">Property </th>
                  <th scope="col">Unit/s rented</th>
                  <th scope="col">Phone number</th>
                </tr>
              </thead>
              <tbody>
                <tr onClick={viewTenantDetails} style={{ cursor: "pointer" }}>
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
        <AddTenant show={showAddModal} onClose={handleHideAddModal} />
        <TenantDetails show={showTenantModal} onClose={handleHideTenantModal} />
      </div>
    </>
  );
}
export default Tenants;

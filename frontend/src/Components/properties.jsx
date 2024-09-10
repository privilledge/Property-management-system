import { Modal } from "bootstrap";
import SupervisorSidebar from "./SupervisorSidebar";
import SupervisorTopbar from "./SupervisorTopbar";
import AddProperty from "./AddProperty";
import { useState } from "react";
import PropertyDetails from "./PropertyDetails";
import SearchBar from "./Searchbar";

function Properties() {
  const [showAddModal, setAddShowModal] = useState(false);
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const handleShowAddModal = () => {
    setAddShowModal(true);
  };
  const handleHideAddModal = () => {
    setAddShowModal(false);
  };
  const viewPropertyDetails = () => {
    setShowPropertyModal(true);
  };
  const handleHidePropertyModal = () => {
    setShowPropertyModal(false);
  };

  return (
    <>
      <SupervisorSidebar />
      <div className="main-content">
        <SearchBar />
        <div className="properties card mx-2 mt-4">
          <div className="card-title p-3 d-flex">
            <h5 className="mt-1">All Properties</h5>
            <button className="btn add-button" onClick={handleShowAddModal}>
              Add property
            </button>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Property</th>
                  <th scope="col">Number of Units</th>
                  <th scope="col">Tenants</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                <tr onClick={viewPropertyDetails} style={{ cursor: "pointer" }}>
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
        <AddProperty show={showAddModal} onClose={handleHideAddModal} />
        <PropertyDetails
          show={showPropertyModal}
          onClose={handleHidePropertyModal}
        />
      </div>
    </>
  );
}
export default Properties;

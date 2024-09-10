import AddUnit from "./AddUnit";
import SupervisorSidebar from "./SupervisorSidebar";
import SupervisorTopbar from "./SupervisorTopbar";
import { useState } from "react";
import UnitDetails from "./UnitDetails";
import SearchBar from "./Searchbar";
function Units() {
  const [showAddModal, setAddShowModal] = useState(false);
  const [showUnitModal, setShowUnitModal] = useState(false);
  const handleShowAddModal = () => {
    setAddShowModal(true);
  };
  const handleHideAddModal = () => {
    setAddShowModal(false);
  };
  const viewUnitDetails = () => {
    setShowUnitModal(true);
  };
  const handleHideUnitModal = () => {
    setShowUnitModal(false);
  };
  return (
    <>
      <SupervisorSidebar />
      <div className="main-content">
        <SearchBar />
        <div className="properties card mx-2 mt-4">
          <div className="card-title p-3 d-flex">
            <h5 className="mt-1">All Units</h5>
            <button className="btn add-button" onClick={handleShowAddModal}>
              Add unit
            </button>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Unit</th>
                  <th scope="col">Property </th>
                  <th scope="col">Current tenant</th>
                  <th scope="col">Rent per month</th>
                </tr>
              </thead>
              <tbody>
                <tr onClick={viewUnitDetails} style={{ cursor: "pointer" }}>
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
        <AddUnit show={showAddModal} onClose={handleHideAddModal} />
        <UnitDetails show={showUnitModal} onClose={handleHideUnitModal} />
      </div>
    </>
  );
}
export default Units;

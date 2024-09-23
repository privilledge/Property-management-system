import AddUnit from "./AddUnit";
import SupervisorSidebar from "./SupervisorSidebar";
import SupervisorTopbar from "./SupervisorTopbar";
import { useEffect, useState } from "react";
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
  const [units, setUnits] = useState([]);

  useEffect(() => {
    const getUnits = async () => {
      try {
        const response = await fetch("http://localhost:9090/units/getAllUnits");
        if (response.ok) {
          console.log("Fetched units");
        } else {
          console.log("Error fetching units");
        }
        const data = await response.json();
        setUnits(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getUnits();
  }, []);

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
                {units.map((unit) => (
                  <tr
                    onClick={viewUnitDetails}
                    style={{ cursor: "pointer" }}
                    key={unit.id}
                  >
                    <td>{unit.unitName}</td>
                    <td>{unit.property?.propertyName}</td>
                    <td>{unit.tenant}</td>
                    <td>${unit.rentAmount}</td>
                  </tr>
                ))}
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

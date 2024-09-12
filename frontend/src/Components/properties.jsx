import { Modal } from "bootstrap";
import SupervisorSidebar from "./SupervisorSidebar";
import SupervisorTopbar from "./SupervisorTopbar";
import AddProperty from "./AddProperty";
import { useEffect, useState } from "react";
import PropertyDetails from "./PropertyDetails";
import SearchBar from "./Searchbar";

function Properties() {
  const [showAddModal, setAddShowModal] = useState(false);
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [properties, setProperties] = useState([]);
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

  useEffect(() => {
    const getProperties = async () => {
      try {
        const response = await fetch(
          "http://localhost:9090/property/properties"
        );
        if (response.ok) {
          console.log("Fetched");
        } else {
          console("Fetched but another error occured");
        }
        const data = await response.json();
        console.log(data);
        setProperties(data);
      } catch (error) {
        console.log("failed to fetch");
      }
    };
    getProperties();
  }, []);

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
                {properties.map((property) => (
                  <tr
                    onClick={viewPropertyDetails}
                    style={{ cursor: "pointer" }}
                    key={property.id}
                  >
                    <td>{property.propertyName}</td>
                    <td>{property.totalUnits}</td>
                    <td>{property.totalTenants}</td>
                    <td>{property.address}</td>
                  </tr>
                ))}
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

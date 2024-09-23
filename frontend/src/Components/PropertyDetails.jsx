import { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import SupervisorSidebar from "./SupervisorSidebar";
import SupervisorTopbar from "./SupervisorTopbar";

function PropertyDetails({ show, onClose }) {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const gettPropertyById = async () => {
      try {
        const response = await fetch(
          `http://localhost:9090/property/propertyById/${id}`
        );
        if (response.ok) {
          console.log("Fetched properties");
        } else {
          console.log("Failed to fetch properties");
        }
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    gettPropertyById();
  }, []);

  const back = () => {
    navigate("/properties");
  };

  return (
    <>
      <SupervisorSidebar />
      <div className="main-content">
        <SupervisorTopbar />
        <div className="card m-3 mx-5 p-2">
          <div className="col">
            <h5>
              <span className="px-1">
                <svg
                  stroke="#000"
                  fill="#000"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1.2em"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={back}
                >
                  <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path>
                </svg>
              </span>
            </h5>
          </div>
          <div className="details-body">
            <div className="details-container m-3">
              <table className="table table-striped table-bordered table-hover">
                <thead class="thead-dark">
                  <tr>
                    <th colSpan="2" className="text-left">
                      {property.propertyName}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Total tenants</strong>
                    </td>
                    <td>{property.totalTenants}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Total units</strong>
                    </td>
                    <td>{property.totalUnits}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Property type</strong>
                    </td>
                    <td>{property.type}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Property manager</strong>
                    </td>
                    <td>{property.propertyManager}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Contact email</strong>
                    </td>
                    <td>{property.contactEmail}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Contact phone number</strong>
                    </td>
                    <td>{property.contactPhone}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Address</strong>
                    </td>
                    <td>{property.address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="modal-footer-buttons p-1 d-flex">
            <button className="btn btn-danger m-1" onClick={onClose}>
              Delete property
            </button>
            <button className="btn btn-add m-1" type="submit">
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default PropertyDetails;

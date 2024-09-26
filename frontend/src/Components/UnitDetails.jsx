import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";

function UnitDetails({ show, onClose }) {
  return (
    <>
      <div>
        <Modal show={show} onHide={onClose} size="lg">
          <ModalHeader closeButton>
            <h5>Propert Name</h5>
          </ModalHeader>
          <ModalBody>
            <form className="px-2 add-item">
              <div className="form-row row ">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Unit Name</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Rose Building"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputState">Unit Type</label>
                  <select id="inputState" className="form-control">
                    <option selected>Office Building</option>
                    <option>Townhouse</option>
                    <option>Multi-family house</option>
                    <option>Single family house</option>
                    <option>Apartment</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="123 Mainway street"
                  required
                />
              </div>

              <div className="form-row row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>

                <div className="form-group col-md-4">
                  <label htmlFor="inputState">State</label>
                  <select id="inputState" className="form-control">
                    <option selected>Select state</option>
                    <option>Harare</option>
                    <option>Bulawayo</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="inputZip">Zip</label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputAddress2">Units / Rooms</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputAddress2"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputAddress2">Manager's email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="johndoe@gmail.com"
                  />
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <div className="modal-footer-buttons p-1 d-flex">
              <button className="btn btn-danger m-1" onClick={onClose}>
                Cancel
              </button>
              <button className="btn btn-add m-1" type="submit">
                Save Changes
              </button>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
export default UnitDetails;

import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";

function AddProperty({ show, onClose }) {
  return (
    <>
      <div>
        <Modal show={show} onHide={onClose} size="lg">
          <ModalHeader closeButton>
            <h5>Add Property</h5>
          </ModalHeader>
          <ModalBody>
            <form className="px-2 add-item">
              <div class="form-row row ">
                <div class="form-group col-md-6">
                  <label htmlFor="inputEmail4">Property Name</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Rose Building"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <label htmlFor="inputState">Property Type</label>
                  <select id="inputState" class="form-control">
                    <option selected>Office Building</option>
                    <option>Townhouse</option>
                    <option>Multi-family house</option>
                    <option>Single family house</option>
                    <option>Apartment</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="123 Mainway street"
                  required
                />
              </div>

              <div class="form-row row">
                <div class="form-group col-md-6">
                  <label htmlFor="inputCity">Total tenants</label>
                  <input type="number" class="form-control" id="inputCity" />
                </div>

                <div class="form-group col-md-4">
                  <label htmlFor="inputState">Total Units/Rooms</label>
                  <input type="number" class="form-control" id="inputCity" />
                </div>
                <div class="form-group col-md-2">
                  <label htmlFor="inputZip">Manager</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
              </div>
              <div className="row">
                <div class="form-group col-md-6">
                  <label htmlFor="inputAddress2">Contact email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label htmlFor="inputAddress2">Contact phone</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="0748234198"
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
                Save Property
              </button>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
export default AddProperty;

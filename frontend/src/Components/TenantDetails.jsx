import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";

function TenantDetails({ show, onClose }) {
  return (
    <>
      <div>
        <Modal show={show} onHide={onClose} size="lg">
          <ModalHeader closeButton>
            <h5>Propert Name</h5>
          </ModalHeader>
          <ModalBody>
            <form className="px-2 add-item">
              <div class="form-row row ">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Tenant Name</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Rose Building"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputState">Tenant Type</label>
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
                <label for="inputAddress">Address</label>
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
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>

                <div class="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control">
                    <option selected>Select state</option>
                    <option>Harare</option>
                    <option>Bulawayo</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
              </div>
              <div className="row">
                <div class="form-group col-md-6">
                  <label for="inputAddress2">Units / Rooms</label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputAddress2"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputAddress2">Manager's email</label>
                  <input
                    type="text"
                    class="form-control"
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
export default TenantDetails;

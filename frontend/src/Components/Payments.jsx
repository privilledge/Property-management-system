import SearchBar from "./Searchbar";
import SupervisorSidebar from "./SupervisorSidebar";
import SupervisorTopbar from "./SupervisorTopbar";
function Payments() {
  return (
    <>
      <SupervisorSidebar />
      <div className="main-content">
        <SearchBar />
        <div className="properties card mx-2 mt-4">
          <div className="card-title p-3 d-flex">
            <h5 className="mt-1">All Payments</h5>
            <button className="btn add-button">Add payment</button>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Associated Tenant</th>
                  <th scope="col">Date of payment</th>
                  <th scope="col">Payment method</th>
                  <th scope="col">Amount paid</th>
                  <th scope="col">Property</th>
                  <th scope="col">Unit/s</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Joina City</td>
                  <td>15th floor left wing</td>
                  <td>23-10-2024</td>
                  <td>23-10-2024</td>
                  <td>Full-house</td>
                </tr>
                <tr>
                  <td>Tom Mayor</td>
                  <td>123 Mainway</td>
                  <td>Full-house</td>
                  <td>12-11-2024</td>
                  <td>23-10-2024</td>
                  <td>Full-house</td>
                </tr>
                <tr>
                  <td>Jane Knox</td>
                  <td>21 Streetwise</td>
                  <td>Office 14</td>
                  <td>21-12-2024</td>
                  <td>23-10-2024</td>
                  <td>Full-house</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Payments;

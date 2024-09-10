import SupervisorSidebar from "./SupervisorSidebar";
import SupervisorTopbar from "./SupervisorTopbar";
function Settings() {
  return (
    <>
      <SupervisorSidebar />
      <div className="main-content">
        <SupervisorTopbar />
        <div className="properties card mx-2 mt-4">
          <div className="card-title p-3 d-flex">
            <h5 className="mt-1">Settings</h5>
            <button className="btn add-button">Save changes</button>
          </div>
          <div className="card-body"></div>
        </div>
      </div>
    </>
  );
}
export default Settings;

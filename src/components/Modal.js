const Modal = () => {
  return (
    <>
      <div className="modal fade" id="gladeModal" tabIndex="-1" aria-labelledby="gladeModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="gladeModalLabel">Request for Assistance</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="first-name" className="col-form-label">First Name</label>
                  <input type="text" className="form-control" id="first-name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="last-name" className="col-form-label">Last Name</label>
                  <input type="text" className="form-control" id="last-name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="requestAmount" className="col-form-label">Amount</label>
                  <input type="number" step="500" className="form-control" id="requestAmount" />
                </div>
                <div className="mb-3">
                  <label htmlFor="purpose" className="col-form-label">Purpose:</label>
                  <select className="form-select" id="purpose" aria-label="Glade Select">
                    <option value="1">School Fees</option>
                    <option value="2">Medical Bills</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Request</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
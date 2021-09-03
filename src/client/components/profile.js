export default function Profile() {
  return (
    <div className="App">
      <div className="container p-5">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="container light-style flex-grow-1 container-p-y">
                <div>
                  <div className="modal-header">
                    <h4 className="modal-title" id="exampleModalLabel">
                      Account settings
                    </h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                </div>

                <div className="card overflow-hidden">
                  <div className="row no-gutters row-bordered row-border-light">
                    <div className="col-md-9">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade active show"
                          id="account-general"
                        >
                          <hr className="border-light m-0" />
                          <div className="card-body">
                            <div className="form-group">
                              <label className="form-label">Username</label>
                              <input
                                type="text"
                                className="form-control mb-1"
                                defaultValue="Username"
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Name</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Name"
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">E-mail</label>
                              <input
                                type="email"
                                className="form-control mb-1"
                                defaultValue="exemple@mail.com"
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Phone</label>
                              <input
                                type="number"
                                className="form-control"
                                defaultValue="064567891"
                              />
                            </div>
                            <div>
                              <div className="alert alert-warning mt-4 mb-1">
                                Reset password
                              </div>
                              <div className="card-body p-2">
                                <div className="form-group">
                                  <label className="form-label">
                                    Current password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                  />
                                </div>
                                <div className="form-group">
                                  <label className="form-label">
                                    New password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                  />
                                </div>
                                <div className="form-group">
                                  <label className="form-label">
                                    Repeat new password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right mt-3">
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-default"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

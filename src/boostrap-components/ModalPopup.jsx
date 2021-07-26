import { useState, useEffect, useRef } from "react";
import { Modal } from "bootstrap";

function ModalPopup() {
  const [modal, setModal] = useState(null);
  const exampleModal = useRef();

  // temporary situation
  /*   try {
    console.log($);
    modal.show();
  } catch {
    console.log("Couldn't launch modal.show() before componentDidMount");
  }
 */
  useEffect(() => {
    setModal(new Modal(exampleModal.current));
  }, []);

  return (
    <>
      <div
        className={`modal `}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={exampleModal}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Due to heroku free account</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                1. The app has launched 30 seconds late and the server will be
                launching in 30 seconds more. 2. For the same reason, the date
                of the calendar can't be update everyday.
              </p>
              <p>Be patient. Thank you very much</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => modal.hide()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalPopup;

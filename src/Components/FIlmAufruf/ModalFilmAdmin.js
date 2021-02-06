import {useState} from "react";
import Modal from "react-bootstrap/Modal"

function ModalFilmAdmin(Anzeigen) {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false)
    sessionStorage.setItem("ModalFilmAdmin", true)
    ;
    
  
    return (
      <>
        
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Film wurde ausgewählt</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={handleClose}>
              Close
            </button>
            <button variant="primary" onClick={handleClose}>
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

/* export const ModalFilmAdmin = ({showModal}) => {

        return (
            <div>
                {showModal?<div>
                Das Modal</div>:null}
            </div>
        )

} */

export default ModalFilmAdmin
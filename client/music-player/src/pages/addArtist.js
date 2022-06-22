import {Modal,Button,Form} from 'react-bootstrap';
import React, {  useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


// import './header.css'
function AddArtist(){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Artist
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Artist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Artist Name</Form.Label>
              <Form.Control
                type="text"
                // placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dob">
              <Form.Label>Date of birth</Form.Label>
              <Form.Control
                type="date"
                // placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Bio</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
    }

export default AddArtist
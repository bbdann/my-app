import React, { useState } from "react";
import Form from "components/Form";
import Button from "@material-ui/core/Button";
import "./Modal.css";

const Modal = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Button
        style={{ marginBottom: "15px" }}
        variant="contained"
        color="default"
        onClick={() => setIsOpen(true)}
      >
        Додати вакансію
      </Button>

      {isOpen && (
        <div className="modal">
          <div className="modal-body">
            <h1>Додати вакансію</h1>
            <Form clsModal={() => setIsOpen(false)} {...props} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Modal;

import React, { useState } from "react";
import Form from "./Form";
import Button from "@material-ui/core/Button";

const EditItem = ({ vacancyId, editItem, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <Button
        style={{ marginBottom: "15px" }}
        size="small"
        variant="contained"
        color="default"
        onClick={() => setIsOpen(true)}
      >
        Edit
      </Button>

      {isOpen && (
        <div className="modal">
          <div className="modal-body">
            <h1>Редагувати вакансію</h1>
            <Form
              clsModal={() => setIsOpen(false)}
              onSubmit={(data, cb) => editItem(vacancyId, data, cb)}
              {...props}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

EditItem.propTypes = {};

export default EditItem;

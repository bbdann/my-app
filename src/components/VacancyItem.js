import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import Context from "../utils/context";
import EditItem from "./EditItem";
import Button from "@material-ui/core/Button";

const VacancyItem = ({ vacancy, editItem }) => {
  const { removeItem } = useContext(Context);

  return (
    <div className="main-list">
      <EditItem editItem={editItem} values={vacancy} vacancyId={vacancy.id} />
      <Button
        style={{ marginBottom: "15px", float: "right" }}
        size="small"
        variant="contained"
        color="secondary"
        onClick={() => removeItem(vacancy.id)}
      >
        Delete
      </Button>
      <Box component="span" m={3}>
        {
          <img
            src={vacancy.image}
            alt={vacancy.title}
            style={{ float:"left" }}
          />
        }
      </Box>
      <br />
      <span>Title: {vacancy.title}</span>
      <br />
      <span>Description: {vacancy.description}</span>
      <br />
      <span>City: {vacancy.city}</span>
      <br />
      
    </div>
  );
};

VacancyItem.propTypes = {
  vacancy: PropTypes.object.isRequired,
  index: PropTypes.number
};

export default VacancyItem;

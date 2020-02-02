import React from "react";
import VacancyItem from "../components/VacancyItem";
import PropTypes from "prop-types";

const VacancyList = ({ vacancys, editItem, ...props }) => {
  return (
    <div className="main">
      {vacancys.map((vacancy, index) => {
        return (
          <VacancyItem            
            vacancy={vacancy}
            key={vacancy.id}
            index={index}
            onChange={props.onToggle}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

VacancyList.propTypes = {
  vacancys: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default VacancyList;

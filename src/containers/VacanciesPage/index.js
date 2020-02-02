import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {SERVER_URL} from "../../utils/constants";
import axios from "axios";
import Context from "../../utils/context";
import Modal from "../Modal/Modal";
import Loader from "../../components/Loader";
import VacancyList from "../VacancyList";

const VacanciesPage = () => {
  const [vacancys, setVacancy] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(vacancys);

  function getRequest() {
    fetch(`${SERVER_URL}/vacancys`)
      .then(response => response.json())
      .then(vacancys => {
        setVacancy(vacancys);
        setLoading(false);
      });
  }

  useEffect(() => {
    getRequest();
  }, []);

  const addItem = (values, callBack) => {
    const data = values;
    axios
      .post(`${SERVER_URL}/vacancys`, data)
      .then(response => {
        if (callBack) {
          callBack();
          setVacancy(vacancys.concat([data]));
        }
      })
      .catch(error => console.log(error));
  };

  const removeItem = id => {
    axios
      .delete(`${SERVER_URL}/vacancys/` + id)
      .then(response => {
        if (response.status === 200) {
          setVacancy(vacancys.filter(vacancy => vacancy.id !== id));
        }
      })
      .catch(error => console.log(error));
  };

  const editItem = (id, values, callBack) => {
    axios
      .put(`${SERVER_URL}/vacancys/${id}`, values)
      .then(response => {
        const vacansiesNew = vacancys.map(vacansy => {
          if (vacansy.id === id) {
            return {
              ...vacansy,
              title: values.title,
              description: values.description,
              city: values.city,
              image: values.image
            }
          }
          return vacansy;
        });

        setVacancy(vacansiesNew);

        //  update list locally
        callBack && callBack()
      })
      .catch(error => console.log(error));
  };

  return (
    <Context.Provider value={{removeItem}}>
      <div className="wrapper">
        <h1>Актуальні вакансії</h1>
        <Modal onSubmit={addItem}/>

        {loading && <Loader/>}
        {vacancys.length ? (
          <VacancyList vacancys={vacancys} editItem={editItem}/>
        ) : (
          <p>Вакансії відсутні!</p>
        )}
      </div>
    </Context.Provider>
  );
};

VacanciesPage.propTypes = {

};

export default VacanciesPage;

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DataTable from "../reusable/DataTable";
import { getResidentsDetail } from "../../actions";
import PropTypes from "prop-types";
function ResidentDetails(props) {
  const [residentList, setResidentList] = useState([]);

  useEffect(() => {
    getFilmList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.residentData]);
  const getFilmList = async () => {
    let residentsList = [];
    let residentData = props.residentData;
    if (residentData && residentData.length > 0) {
      for (let i = 0; i < residentData.length; i++) {
        let film = residentData[i];

        let filmId = film.substring(0, film.length - 1).slice(-1);
        await props.getResidentsDetail(filmId).then((res) => {
          delete res.created;
          delete res.edited;
          delete res.films;
          delete res.gender;
          delete res.species;
          delete res.url;
          delete res.homeworld;
          delete res.hair_color;
          delete res.starships;
          delete res.vehicles;

          residentsList.push(res);
        });
      }

      setResidentList(residentsList);
    }
  };

  return (
    <>
      {residentList && residentList.length > 0 && (
        <DataTable
          data={residentList}
          typeOfData="array"
          button={true}
          title="Resident Data"
        />
      )}
    </>
  );
}
ResidentDetails.propTypes = {
  residentData: PropTypes.array,
};
export default withRouter(
  connect(null, { getResidentsDetail })(ResidentDetails)
);

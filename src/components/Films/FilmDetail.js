import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DataTable from "../reusable/DataTable";
import { getFlimsDetail } from "../../actions";
import PropTypes from "prop-types";

function FilmDetails(props) {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    getFilmList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.filmsData]);
  const getFilmList = async () => {
    let filmsList = [];
    let filmsData = props.filmsData;
    if (filmsData && filmsData.length > 0) {
      for (let i = 0; i < filmsData.length; i++) {
        let film = filmsData[i];

        let filmId = film.substring(0, film.length - 1).slice(-1);
        await props.getFlimsDetail(filmId).then((res) => {
          delete res.characters;
          delete res.created;
          delete res.edited;
          delete res.planets;
          delete res.species;
          delete res.starships;
          delete res.url;
          delete res.vehicles;
          delete res.episode_id;
          delete res.opening_crawl;
          filmsList.push(res);
        });
      }

      setFilmList(filmsList);
    }
  };
  return (
    <>
      {filmList && filmList.length > 0 && (
        <DataTable
          data={filmList}
          typeOfData="array"
          button={true}
          title="Films Data"
        />
      )}
    </>
  );
}
FilmDetails.propTypes = {
  filmsData: PropTypes.array,
  test: PropTypes.string,
};
export default withRouter(connect(null, { getFlimsDetail })(FilmDetails));

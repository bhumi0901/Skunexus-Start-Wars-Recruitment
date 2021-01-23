import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getPlanetDetail, getFlimsDetail } from "../../actions";
import FilmDetail from "./FilmDetail";
function Films(props) {
  const [planetDataResponse, setPlanetDataResponse] = useState();
  useEffect(() => {
    props.getPlanetDetail(props.location.state.key).then(async (res) => {
      setPlanetDataResponse(res.films);
    });
  }, [planetDataResponse, props]);

  return (
    <div className="container">
      <FilmDetail filmsData={planetDataResponse} />
    </div>
  );
}
export default withRouter(
  connect(null, { getPlanetDetail, getFlimsDetail })(Films)
);

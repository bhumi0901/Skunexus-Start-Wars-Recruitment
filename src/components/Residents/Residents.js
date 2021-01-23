import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getPlanetDetail } from "../../actions";
import ResidentDetails from "./ResidentDetail";
function Residents(props) {
  const [planetDataResponse, setPlanetDataResponse] = useState();

  useEffect(() => {
    props.getPlanetDetail(props.location.state.key).then(async (res) => {
      setPlanetDataResponse(res.residents);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, planetDataResponse);

  return (
    <div className="container">
      <ResidentDetails residentData={planetDataResponse} />
    </div>
  );
}
export default withRouter(connect(null, { getPlanetDetail })(Residents));

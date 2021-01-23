import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RecordCard from "../reusable/RecordCard";
import { getPlanetDetail } from "../../actions";
function PlanetDetails(props) {
  const [planetDetails, setPlanetDetails] = useState();
  useEffect(() => {
    props.getPlanetDetail(props.location.state.key).then((res) => {
      delete res.films;
      delete res.edited;
      delete res.created;
      delete res.residents;
      delete res.url;
      setPlanetDetails(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planetDetails]);
  return (
    <div className="container">
      <RecordCard heading="Planet detail" data={planetDetails} button />
    </div>
  );
}
export default withRouter(connect(null, { getPlanetDetail })(PlanetDetails));

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./Planets.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PlanetForm from "../PlanetForm";
import DataTable from "../reusable/DataTable";
import { Alert } from "reactstrap";
import { getPlanet } from "../../actions";
let display = [];
function Planets(props) {
  const [modal, setModal] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [displayArray, setDisplayArray] = useState([]);
  const [header, setHeader] = useState([]);
  const getPlanet = () => {
    setDisplayArray([]);

    props.getPlanet().then((res) => {
      const header = [
        ["Name", "text"],
        ["Rotation period", "number"],
        ["Orbital period", "number"],
        ["Diameter", "number"],
        ["Climate", "text"],
        ["Gravity", "text"],
        ["Terrain", "text"],
        ["Surface water", "number"],
        ["Population", "number"],
        ["Residents", "number"],
        ["Films", "number"],
        ["Action", "text"],
      ];
      setHeader(header);
      res.results &&
        res.results.forEach((obj, key) => {
          delete obj.edited;
          delete obj.created;
          if (obj.films) {
            obj.films = obj.films.length;
          }
          if (obj.residents) {
            obj.residents = obj.residents.length;
          }
          if (key === 2) {
            obj.url = <>-</>;
          } else {
            obj.url = (
              <>
                <button
                  className="btn btn-dark mb-2"
                  id={obj.url}
                  onClick={(e) => redirect(e, key + 1, "films")}
                  disabled={obj.films > 0 ? "" : "disabled"}
                >
                  Go to Films
                </button>
                <button
                  className="btn btn-secondary mb-2"
                  id={obj.url}
                  onClick={(e) => redirect(e, key + 1, "recidents")}
                  disabled={obj.residents > 0 ? "" : "disabled"}
                >
                  Go to Residents
                </button>
              </>
            );
          }
        });
      res.results.map((obj) => {
        let objarray = [];
        for (let value of Object.values(obj)) {
          objarray.push(value);
        }
        display.push(objarray);
        return null;
      });
      setDisplayArray(display);
    });
  };
  const redirect = (e, key, redirectCom) => {
    e.stopPropagation();

    if (redirectCom === "films") {
      props.history.push({
        pathname: `/planet/${key}/films`,
        state: {
          key: key,
        },
      });
    } else {
      props.history.push({
        pathname: `/planet/${key}/residents`,
        state: {
          key: key,
        },
      });
    }
  };
  useEffect(() => {
    getPlanet();
  }, [display]);
  const handleModal = () => {
    setModal(!modal);
  };
  const onDismiss = () => setIsAlert(false);
  const changeArray = (dataobj) => {
    setIsAlert(true);
  };

  return (
    <>
      {isAlert && (
        <Alert color="success" isOpen={isAlert} toggle={onDismiss}>
          Your data is successfully added.
        </Alert>
      )}
      <div className=" App">
        <button className="btn btn-info btn-circle mb-2" onClick={handleModal}>
          Add Planet
        </button>

        {/* <Grid data={data} /> */}
        <DataTable data={displayArray} header={header} />
      </div>
      {modal && (
        <PlanetForm handleModal={handleModal} changeArray={changeArray} />
      )}
    </>
  );
}

export default withRouter(connect(null, { getPlanet })(Planets));

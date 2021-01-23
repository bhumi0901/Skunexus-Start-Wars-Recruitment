import React from "react";
import { Table, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import "./DataTable.css";
import PropTypes from "prop-types";
function DataTable(props) {
  const openCard = (objKey) => {
    props.history.push({
      pathname: "/planetDetails",
      state: {
        key: objKey,
      },
    });
  };
  const onBackButtonClick = () => {
    props.history.goBack();
  };
  return (
    <>
      {props.button && (
        <div className="table-title">
          <div className="backButton">
            <Button onClick={onBackButtonClick}>Go Back</Button>
          </div>
          {props.title && <div className="table-heading">{props.title}</div>}
        </div>
      )}

      {props.typeOfData && props.typeOfData === "array" ? (
        <Table responsive>
          <thead>
            {props.data.map((obj, key) => {
              if (key === 0) {
                let tr = (
                  <tr key={key}>
                    {Object.keys(obj).map((key, i) => {
                      return (
                        <th key={i}>{key.replace(/_/g, " ").toUpperCase()}</th>
                      );
                    })}
                  </tr>
                );
                return tr;
              } else {
                return false;
              }
            })}
          </thead>
          <tbody>
            {props.data.map((obj, key) => {
              let tr = (
                <tr key={key}>
                  {Object.keys(obj).map((key, i) => {
                    return <td key={i}>{obj[key]}</td>;
                  })}
                </tr>
              );
              return tr;
            })}
          </tbody>
        </Table>
      ) : (
        <Table responsive>
          <thead>
            <tr>
              {props.header.map((obj, key) => {
                return (
                  <th
                    key={key}
                    className={obj[1] === "text" ? "" : "text-right"}
                  >
                    {obj[0].replace(/_/g, " ").toUpperCase()}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {props.data.map((obj, key) => {
              return (
                <tr key={key} onClick={() => openCard(key + 1)}>
                  {obj.map((obj, key) => {
                    return <td key={key}>{obj}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
}
DataTable.propTypes = {
  typeOfData: PropTypes.string,
  data: PropTypes.array,
  header: PropTypes.array,
  button: PropTypes.bool,
  title: PropTypes.string,
};
export default withRouter(DataTable);

import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import "./RecordCard.css";
import PropTypes from "prop-types";
function RecordCard(props) {
  const [cardData, setCardData] = useState({});
  const onBackButtonClick = () => {
    props.history.goBack();
  };
  useEffect(() => {
    setCardData(props.data);
  }, [props.data]);

  return (
    <div className="recordCard">
      <Card body>
        <CardTitle>
          <div className="heading">{props.heading}</div>
        </CardTitle>
        <CardText>
          <Row>
            <Col>
              {cardData &&
                Object.keys(cardData).map((key, i) => {
                  return (
                    <div key={i}>
                      <b>{key.replace(/_/g, " ").toUpperCase()}</b>
                    </div>
                  );
                })}
            </Col>
            <Col>
              {cardData &&
                Object.keys(cardData).map((key, i) => {
                  return <div key={i}>{cardData[key]}</div>;
                })}
            </Col>
          </Row>
        </CardText>
        {props.button && <Button onClick={onBackButtonClick}>Go Back</Button>}
      </Card>
    </div>
  );
}
RecordCard.propTypes = {
  data: PropTypes.object,
};
export default withRouter(RecordCard);

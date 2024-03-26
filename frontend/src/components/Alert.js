import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert as BootstrapAlert, Row, Col } from "react-bootstrap"; // Importing Alert component from React Bootstrap


const Alert = ({ alerts }) => (
  <Row className="justify-content-center ">
    <Col xs={6} md={4} lg={3}>
      {" "}
      {/* Adjust column size based on your preference */}
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <BootstrapAlert key={alert.id} variant={alert.alertType}>
            {alert.msg}
          </BootstrapAlert>
        ))}
    </Col>
  </Row>
);

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps)(Alert);

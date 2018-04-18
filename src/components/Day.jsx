import React from 'react';
import PropTypes from 'prop-types';

function Day(props){
  return (
    <div>
      <h2>{props.day}</h2>
      <h5>{props.hours}</h5>
      <h5>Booth {props.booth} at {props.location}</h5>
      <hr></hr>
    </div>
  );
}

Day.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Day;

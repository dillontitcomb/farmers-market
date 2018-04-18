import React from 'react';
import PropTypes from 'prop-types';

function Day(props){
  return (
    <div>
      <h2>{props.day}</h2>
      <hr></hr>
      <h5>{props.hours}</h5>
      <h5>Booth {props.booth} at {props.location}</h5>
      <style jsx>{`
        h2 {
          margin-top: 5px;
        }
        div {
          background-color: #DDEFF3;
          border: 2px solid grey;
          display: inline-block;
          width: 120px;
          height: 150px;
          padding: 5px;
          margin: 10px;
        }
        `}</style>
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

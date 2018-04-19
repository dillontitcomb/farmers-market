import React from 'react';
import PropTypes from 'prop-types';

function Month(props){
  return (
    <div>
      <h2>{props.month}</h2>
      <hr></hr>
      <ul>{props.selection.map((name, index) =>
        <li key={index}>{name}</li>
      )}
      </ul>
      <style jsx>{`
        `}</style>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Month;

import React from 'react';
import PropTypes from 'prop-types';
import ProduceType from './ProduceType';

function Month(props){
  return (
    <div>
      <h2>{props.month}</h2>
      <hr></hr>
      <ul>{props.selection.map((name, index) =>
        <ProduceType name={name}
          key={index}/>
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

import React from 'react';
import PropTypes from 'prop-types';

function ProduceType(props){
  return (
    <div>
      <li>{props.name}</li>
      <style jsx>{`
        `}</style>
    </div>
  );
}

ProduceType.propTypes = {
  name: PropTypes.string.isRequired
};

export default ProduceType;

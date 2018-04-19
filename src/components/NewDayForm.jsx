import React from 'react';

function NewDayForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='day'
          placeholder='Day of the week'/>
        <input
          type='text'
          id='location'
          placeholder='Place in Portland'/>
        <input
          type='text'
          id='hours'
          placeholder='Time of day'/>
        <input
          type='text'
          id='booth'
          placeholder='Booth name'/>
        <button type='submit'>Add Day</button>
      </form>
    </div>
  );
}

export default NewDayForm;

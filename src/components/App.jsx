import React from 'react';
import Header from './Header';
import WeeklySchedule from './WeeklySchedule';

function App(){
  return (
    <div>
      <Header/>
      <WeeklySchedule/>
      <style jsx>{`
          div {
            margin: auto;
            max-width: 600px;
          }
            `}
      </style>
    </div>
  );
}

export default App;

import React from 'react';
import Header from './Header';
import WeeklySchedule from './WeeklySchedule';
import MonthlyProduce from './MonthlyProduce';

function App(){
  return (
    <div>
      <Header/>
      <WeeklySchedule/>
      <MonthlyProduce/>
      <style global jsx>{`
          body {
            background-color: #DDEFF3;
          }

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

import React from 'react';
import Header from './Header';
import WeeklySchedule from './WeeklySchedule';
import MonthlyProduce from './MonthlyProduce';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>

      <Switch>
        <Route exact path='/' component={WeeklySchedule} />
        <Route exact path='/produce' component={MonthlyProduce} />
      </Switch>
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

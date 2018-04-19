import React from 'react';
import Header from './Header';
import WeeklySchedule from './WeeklySchedule';
import MonthlyProduce from './MonthlyProduce';
import { Switch, Route } from 'react-router-dom';
import NewDayForm from './NewDayForm';
import Error404 from './Error404';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={WeeklySchedule} />
        <Route exact path='/produce' component={MonthlyProduce} />
        <Route exact path='/newday' component={NewDayForm} />
        <Route component={Error404} />
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
